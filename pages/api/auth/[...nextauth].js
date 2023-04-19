import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {prisma} from "prisma/client";

export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      session.user.id = token.user.id;
      session.user.phone = token.user.phone;
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
    async signIn (user) {
      const sessionUser = user.user;

      const loggedClient = await prisma.client.findUnique({
        where: {
          id: sessionUser.id
        }
      })

     
      if(!loggedClient){
        const newClient = await prisma.client.create({
          data: {
            id:sessionUser.id,
            firstName: sessionUser.name.split(" ")[0],
            lastName: sessionUser.name.split(" ")[1],
            email: sessionUser.email,
            picture: sessionUser.image,
          }
        })
      }

      user.user.phone = loggedClient?.phone || null;
      return true
    },
  }
})