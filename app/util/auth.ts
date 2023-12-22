import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { GoogleAuth } from "@/app/auth/google";
import { GithubAuth } from "@/app/auth/github";
import prisma from "./prisma-connection";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider(GoogleAuth.config),
    GithubProvider(GithubAuth.config),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id ,
          email: user.email,
          name: user.name,
          randomKey: 'i am secret jwt'
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          image:token.image,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          image:u.image,
          randomKey: u.randomKey
        }
      }
      return token
    }
  },
  
  // Define custom pages for
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  secret :process.env.NEXTAUTH_SECRET as string,
};