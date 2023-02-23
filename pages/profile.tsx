import { UnauthenticatedUser } from 'components';
import AuthenticatedUserWithoutPhone from 'components/AuthenticatedUserWithoutPhone';
import React from 'react'

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import {PrismaClient} from '@prisma/client'
import Image from 'next/image';
import {fs} from 'utils/fonts';

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

  if(!session || !session.user) return <UnauthenticatedUser/>

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

        <p className={fs.montserrat.xl}>
          {session.user.name}
        </p>
        <p className={fs.roboto.md}>
          Email: {session.user.email}
        </p>
        <p className={fs.roboto.md}>
          Phone: {session.user.phone}
        </p>
      </div>
    </div>
  )
}

export default Profile