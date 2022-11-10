import React, { ReactElement } from 'react'
import {Navbar, Footer} from 'components'

export default function Layout({
  children
}:{
  children:ReactElement
}) {
  return (
    <>
      <div className={"bg-medium-purple h-screen"}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  )
}
