import { UnauthenticatedUser } from 'components';
import AuthenticatedUserWithoutPhone from 'components/AuthenticatedUserWithoutPhone';
import React from 'react'

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import {PrismaClient} from '@prisma/client'
import Image from 'next/image';
import {roboto, montserrat} from 'utils/fonts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'
import {AppointmentCard} from 'components'

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
      my-8 py-6 px-8 bg-light-pink
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
    bg-light-pink px-10 py-8
    `}>
      <p className={`
      ${roboto.className}
      font-light text-2xl text-center mb-8
      `}>
        Increderea incepe cu unghii bine ingrijite!
      </p>

      <div className={`
      border-2 border-dark-purple border-solid rounded-md
      flex flex-col items-center group cursor-pointer mb-8
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
        <div className={`
        mt-4
        `}>
        <FontAwesomeIcon 
        icon={faCalendarPlus}
        className={`text-dark-purple group-hover:text-light-pink`}
        size="10x"
        />
        </div>
      </div>
   
      <div className={`
      border-2 border-dark-purple border-solid rounded-md
      flex flex-col group p-4 gap-2
      h-[16rem] w-[100%]
      `}>
        <div>
          <h1 className={`
          ${montserrat.className} font-medium text-2xl text-dark-purple
          `}>
            Te asteptam!
          </h1>
          <h1 className={`
          ${montserrat.className} font-medium text-2xl text-dark-purple
          `}>
            Urmatoarea ta programare:
          </h1>
        </div>
        <h1 className={`
        ${roboto.className} font-bold text-2xl text-dark-purple
        `}>
          Intretinere
        </h1>
        <div>
          <p className={`
          ${montserrat.className} font-light text-md
          `}>
            Data: 25.12.2023
          </p>
        </div>
        <div className={`
        flex flex-row justify-between
        `}>
          <p className={`
          ${montserrat.className} font-light text-md
          `}>
            Ora: 12:00
          </p>
          <p className={`
          ${montserrat.className} font-light text-md
          `}>
            Cost: 80RON
          </p>
        </div>
        <div className={`
          flex flex-row justify-end
        `}>
          <p  className={`
          ${montserrat.className} font-light text-md
          `}>
          Status: aprobata
          </p>
        </div>
      </div>
      
    </div>

    <div className={`
    bg-light-pink px-10 mt-8 flex flex-col gap-6 py-8
    `}>
      <p className={`
      ${roboto.className}
      font-light text-2xl text-center 
      `}>
        Istoricul programarilor tale:
      </p>
      
      <AppointmentCard/>
      <AppointmentCard/>
      <AppointmentCard/>
      <AppointmentCard/>
    </div>

  </div>
  )
}

export default Profile