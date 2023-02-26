import { Session } from 'next-auth';
import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { roboto } from 'utils/fonts'

interface Props {
  session: Session;
}

const ProfileInfo:FunctionComponent<Props> = ({session}) => {
  return (
    <div className={`
      py-6 px-6 bg-primary
      md:h-[22rem] md:row-span-1 md:px-4
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
          xs:w-24 xs:h-24
          sm:w-28 sm:h-28
          md:w-20 md:h-20
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
            sm:text-4xl
            md:text-2xl
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
            sm:text-3xl
            md:text-xl
          `}>
            Email:
          </p>

          <p className={`
            ${roboto.className}
            overflow-hidden overflow-ellipsis 
            font-light text-xl
            xs:text-2xl
            md:text-lg 
          `}>
            {session.user.email}
          </p>
        </div>

        <div>
          <p className={`
            ${roboto.className}
            font-medium text-xl
            xs:text-2xl
            sm:text-3xl
            md:text-xl
          `}>
            Telefon:
          </p>

          <p className={`
            ${roboto.className}
            font-light text-xl
            xs:text-2xl
            md:text-lg
          `}>
            {session.user.phone}
          </p>
        </div>
      </div>
    </div>
    )
}

export default ProfileInfo