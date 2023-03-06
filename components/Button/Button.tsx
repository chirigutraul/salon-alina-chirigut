import React, { FunctionComponent } from 'react'
import { roboto } from 'utils/fonts'

interface ButtonProps {
  title: string,
  variant?: string,
  onClick(): void,
  size?: string,
  type?: "button" | "submit",
}

const Button: FunctionComponent <ButtonProps> = ({title, variant, onClick, size, type}) => {
  return (
    <button 
    type={type ?? "button"}
    className={`
    px-6 py-2 rounded-sm w-48
    texl-md
    ${size === 'xl' && 'px-8 py-3 text-xl w-56'}
    ${size === '2xl' && 'px-10 py-5 text-2xl w-64'}
    text-white bg-accent
    ${variant === 'light' && 'bg-primary text-accent'}
    `}
    onClick={onClick}
    >
      <p className={`
      ${roboto.className}
      font-light text-center
      `}>
        {title}
      </p>
    </button>
  )
}

export default Button