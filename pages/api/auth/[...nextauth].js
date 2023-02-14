import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      scope:[
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
    })
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      session.user.id = token.user.id;
      session.account = token.account;
      session.profile = token.profile;
      session.token = token;
      return session;
    },
    jwt: async ({ token, user, account, profile }) => {
      user && (token.user = user)
      account && (token.account = account)
      profile && (token.profile = profile)
      return token
    },
  },
})