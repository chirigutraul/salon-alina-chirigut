import React from 'react'
import Link from 'next/link'

function UnAuthorizedUser() {
  return (
    <>
    <div className="p-8 bg-blue-400">
      Pentru a face o programare, trebuie sa fii logat.
    </div>
    <Link className="bg-red-400"
      href="/api/auth/signin">
      Sign in
    </Link>
    </>
  )
}

export default UnAuthorizedUser