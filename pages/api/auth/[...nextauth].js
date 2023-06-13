import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";
import { getClientById, createClient } from "utils/hooks/requests/clients";

export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
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

      const loggedClient = await getClientById(sessionUser.id);

      if(!loggedClient.id){
        const sessionUserFirstName = sessionUser.name.split(" ")[0];
        const sessionUserLastName = sessionUser.name.split(" ")[1];

        const newClientData = {
          id:sessionUser.id,
          firstName: sessionUserFirstName,
          lastName: sessionUserLastName,
          email: sessionUser.email,
          picture: sessionUser.image,
        };


        const newClient = await createClient(newClientData);

        user.user.phone = loggedClient?.phone || null;
        return true
    }

    return true;

    }
  }
})