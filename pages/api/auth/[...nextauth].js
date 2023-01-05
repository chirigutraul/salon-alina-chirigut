import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  callbacks: {
    session({ session, token, user, profile }) {
      session.profile = profile
      session.token = token
      return session
    },
  },
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret:process.env.JWT_SECRET
})