export const ApiServer = process.env.NEXT_PUBLIC_API_SERVER
  ? process.env.NEXT_PUBLIC_API_SERVER
  : "http://localhost:3000";


export const ApiServerSecret = process.env.NEXTAUTH_SECRET
  ? process.env.NEXTAUTH_SECRET
  : "";


export const GoogleAuthClientID = process.env.GOOGLE_AUTH_CLIENT_ID
  ? process.env.GOOGLE_AUTH_CLIENT_ID
  : "";


export const GoogleAuthClientSecret = process.env.GOOGLE_AUTH_CLIENT_SECRET
  ? process.env.GOOGLE_AUTH_CLIENT_SECRET
  : "";


export const GithubAuthClientSecret = process.env.GITHUB_AUTH_CLIENT_SECRET
  ? process.env.GITHUB_AUTH_CLIENT_SECRET
  : "";


export const GithubAuthClientID = process.env.GITHUB_AUTH_CLIENT_ID
  ? process.env.GITHUB_AUTH_CLIENT_ID
  : "";
export const DatabaseURL = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "";
  