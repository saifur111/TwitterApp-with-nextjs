"use client"
import { Props } from "@/util/definations";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}:Props) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
export default AuthProvider