import React, { FunctionComponent } from 'react'

interface ButtonProps {
  title: string,
  type?: string,
}

const Button: FunctionComponent <ButtonProps> = ({title, type}) => {
  switch (type) {
    case 'dark':
      return (
        <button className={`
        bg-dark-purple text-white
        px-6 py-2 rounded-sm w-48
        `}>
          {title}
        </button>
      )
    case 'light':
      return (
        <button className={`
        bg-light-pink text-dark-purple
        px-6 py-2 rounded-sm w-48
        `}>
          {title}
        </button>
      )
    default:
      return (
        <button className={`
        bg-dark-purple text-white
        px-6 py-2 rounded-sm w-48
        lg:w-40 lg:px-2 
        `}>
          {title}
        </button>
      )
}
}

export default Button