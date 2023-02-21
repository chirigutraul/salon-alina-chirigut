import Image from 'next/image'
import React from 'react'

const SignIn = () => {
  return (
    <div className={`
      bg-light-pink my-2 py-16 px-8 flex flex-col items-center
    `}
    >
      <p className={'text-2xl font-sans font-medium text-center'}>
      Pentru a te conecta, te rugam sa alegi una 
      din variantele de mai jos de conectare
      </p>

      <div className={`
        bg-white rounded-sm flex justify-evenly items-center
        shadow-md w-60 py-2
      `}>
          <div className={'relative h-10 w-10'}>
          <Image
          src={"/icons/google.svg"}
          alt="Google icon"
          fill={true}
          sizes={"(max-width:1920px) theme(8)"}
          />
          </div>
          <p className={'text-lg font-medium font-sans text-gray-300'}>Sign in with Google</p>
      </div>
    </div>
  )
}

export default SignIn