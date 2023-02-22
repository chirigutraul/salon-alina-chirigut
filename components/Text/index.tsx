import React, { FunctionComponent } from 'react'
import { roboto, montserrat, rubik } from 'utils/fonts'

interface Props {
  type: 'title' | 'subtitle' | 'description',
  color: 'light' | 'dark',
  children: string,
}

const T:FunctionComponent<Props> = ({
  children,
  type,
  color
}) => {

  const typesClassname = {
    title: rubik.className,
    subtitle: montserrat.className,
    description: roboto.className,
  }

  const typesFontSizes = {
    title: 'text-2xl xs:text-3xl md:text-4xl',
    subtitle: 'text-xl',
    description: '',
  }

  const colors = {
    light: 'text-light-pink',
    dark: 'text-dark-purple',
    fallback:'black',
  }

  return (
    <p 
    className={`
    ${colors[color] ?? colors['fallback']}
    ${typesClassname[type]}
    ${typesFontSizes[type] ?? typesFontSizes['subtitle']}
    `}>
      {children}
    </p>
  )
}

export default T