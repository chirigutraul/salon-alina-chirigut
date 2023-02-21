import Image from 'next/image'
import React from 'react'

import { signIn } from "next-auth/react"

const UnauthenticatedUser = () => {

  const googleAuth= () => {
    signIn(
    "google",
    {},
    { scope:
    'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'}
    )
  }
  return (
    <div className={`
      bg-light-pink my-2 py-16 px-8 flex flex-col items-center
    `}
    >
      <p className={'text-2xl font-sans font-medium text-center'}>
      Pentru a te conecta, te rugam sa alegi una 
      din variantele de mai jos de conectare
      </p>

      <div 
      onClick={googleAuth}
      className={`
        bg-white rounded-sm flex justify-evenly items-center
        shadow-md w-64 py-2 mt-8 cursor-pointer
        hover:bg-gray-100
      `}>
          <div className={'relative h-10 w-10'}>
          <Image
          src={"/icons/SignInGoogle.svg"}
          alt="Google icon"
          fill={true}
          sizes={"(max-width:1920px) theme(8)"}
          />
          </div>
          <p className={'text-lg font-medium font-sans text-gray-500'}>
            Sign in with Google
          </p>
      </div>

      <div className={`
        bg-white rounded-sm flex justify-evenly items-center
        shadow-md w-64 py-2 mt-8 cursor-pointer
        hover:bg-gray-100
      `}>
          <div className={'relative h-10 w-10'}>
          <Image
          src={"/icons/SignInFacebook.svg"}
          alt="Google icon"
          fill={true}
          sizes={"(max-width:1920px) theme(8)"}
          />
          </div>
          <p className={'text-lg font-medium font-sans text-gray-500'}>
            Sign in with Facebook
          </p>
      </div>
    </div>
  )
}

export default UnauthenticatedUser