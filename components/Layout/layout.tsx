import React, { ReactElement } from 'react'
import Navbar from '../Navbar/navbar'

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
      </div>
    </>
  )
}
