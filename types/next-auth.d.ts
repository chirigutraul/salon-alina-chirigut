import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user: {
      id?: string,
      email?: string,
      name?: string,
      image?:string,
      phone?:string,
    }
    token:{
      id:string
      phone?:string,
    }
  }
  export interface Profile {
    id:string,
    email:string,
    phone:string,
  }
}
