import React, { FunctionComponent } from 'react'
import { roboto } from 'utils/fonts'

interface ButtonProps {
  title: string,
  variant?: string,
  onClick(): void,
  size?: string,
  type?: "button" | "submit",
  disabled?: boolean,
}

const Button: FunctionComponent<ButtonProps> = ({ title, variant, onClick, size, type, disabled }) => {
  return (
    <button
      disabled={disabled ?? false}
      type={type ?? "button"}
      onClick={onClick}
      className={`
      px-6 py-2 rounded-sm w-48
      texl-md
      text-white bg-accent
      ${size === 'xl' && 'px-8 py-3 text-xl w-56'}
      ${size === '2xl' && 'px-10 py-5 text-2xl w-64'}
      ${variant === 'light' && 'bg-primary text-accent'}
      ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}
    `}
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