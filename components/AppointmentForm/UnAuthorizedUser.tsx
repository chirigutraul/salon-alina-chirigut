import React from 'react'
import Link from 'next/link'

import { signIn } from "next-auth/react"

function UnAuthorizedUser() {

  const handleGoogleAuth= () => {
    signIn(
      "google",
      {},
      { scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile" }
    )
  }


  return (
    <>
    <div className="p-8 bg-blue-400">
      Pentru a face o programare, trebuie sa fii logat.
    </div>
    {/* <Link className="bg-red-400"
      href="/api/auth/signin">
      Sign in
    </Link> */}
    <button
      onClick={handleGoogleAuth}
    >
      Sign in with google
    </button>
    </>
  )
}

export default UnAuthorizedUser