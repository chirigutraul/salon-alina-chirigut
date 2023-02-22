import { UnauthenticatedUser } from 'components';
import AuthenticatedUserWithoutPhone from 'components/AuthenticatedUserWithoutPhone';
import React from 'react'

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import {PrismaClient} from '@prisma/client'
import Image from 'next/image';
import T from 'components/Text'
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

  if(!session.user.phone) return <AuthenticatedUserWithoutPhone session={session}/>

  return (
    <div
      className={`
        bg-light-pink my-8 py-8
      `}
    >
      <div
        className={`
          flex flex-col items-center
        `}
      >
        <Image
          src={session.user.image ?? ''}
          alt="Picture of the connected user"
          width={80}
          height={80}
          className={'rounded-full'}
        />
        <T 
        type='subtitle'
        >
          Chirigut Raul
        </T>
        {/* <h1 className={`text-dark-purple text-3xl font-regular`}>
          {session.user.name}
        </h1> */}
        {/* <h2>Email: {session.user.email}</h2> */}
        {/* <h2>Email: {session.user.phone}</h2> */}
      </div>
    </div>
  )
}

export default Profile