import { UnauthenticatedUser } from 'components';
import AuthenticatedUserWithoutPhone from 'components/AuthenticatedUserWithoutPhone';
import React from 'react'

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import {PrismaClient} from '@prisma/client'
interface Props {
  session: Session | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);


  if(session){
    const prisma = new PrismaClient();

    const user = await prisma.client.findUnique({
      where :{
        id: session.user.id
      }
    })

    if(user && user.phone){
      session.user.phone = user.phone;
    }
  }

  return {
    props: { session },
  };
};


const Profile = ({ session }: Props) => { 

  if(!session) return <UnauthenticatedUser/>

  if(!session.user.phone) return <AuthenticatedUserWithoutPhone/>

  return (
    <div>Profile</div>
  )
}

export default Profile