import React from 'react'

function UnAuthorizedUser() {
  return (
    <>
    <div className="p-8 bg-blue-400">
      Pentru a face o programare, trebuie sa fii logat.
    </div>
    <a className="bg-red-400"
      href="/api/auth/signin">
      Sign in
    </a>
    </>
  )
}

export default UnAuthorizedUser