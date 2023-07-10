import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
   // NEXT_SECRET
   secret: 'b2d2f0c00c0c4c0c8c0c6c0c4c0c0c0c'
}
export default NextAuth(authOptions)