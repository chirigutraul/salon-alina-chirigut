import { UnauthenticatedUser } from 'components';
import AuthenticatedUserWithoutPhone from 'components/AuthenticatedUserWithoutPhone';
import React from 'react'

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import {PrismaClient} from '@prisma/client'
import Image from 'next/image';
import {roboto, montserrat} from 'utils/fonts'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  <div>
    <div className={`
      my-6 py-6 px-8 bg-light-pink
    `}>
      <div className={`
        flex flex-col 
      `}>
        <div className={`
          flex flex-col items-center
        `}>
          <div className={`
          rounded-full overflow-hidden relative mb-6
          w-20 h-20 
          `}>
          <Image
            src={session.user.image ?? ''}
            alt="Picture of the connected user"
            fill
          />
          </div>
      
          <p className={`
            ${roboto.className}
            font-medium text-2xl
            xs:text-3xl
          `}>
            {session.user.name}
          </p>
        </div>

        <div className={`
          my-3
        `}>
          <p className={`
            ${roboto.className}
            font-medium text-xl
            xs:text-2xl
          `}>
            Email:
          </p>

          <p className={`
            ${roboto.className}
            font-light text-xl
          `}>
            {session.user.email}
          </p>
        </div>

        <div>
          <p className={`
            ${roboto.className}
            font-medium text-xl
            xs:text-2xl
          `}>
            Telefon:
          </p>

          <p className={`
            ${roboto.className}
            font-light text-xl
          `}>
            {session.user.phone}
          </p>
        </div>
      </div>
    </div>

    <div className={`
      bg-light-pink py-8 px-10
    `}>
      <p className={`
        ${roboto.className}
        font-light text-2xl text-center
      `}>
        Increderea incepe cu unghii bine ingrijite!
      </p>

      <div className={`
        border-2 border-dark-purple border-solid rounded-md my-8
        flex flex-col items-center justify-center group
        hover:bg-dark-purple 
        h-[16rem] w-[100%]
      `}>
        <h1 className={`
          ${montserrat.className}
          font-bold text-2xl mt-4 text-dark-purple
          group-hover:text-light-pink
        `}>
          Rezerva Acum!
        </h1>
        {/* <FontAwesomeIcon 
        // icon={faCalendarPlus}
        size="3x" */}
        {/* /> */}
      </div>
    </div>

  </div>
  )
}

export default Profile