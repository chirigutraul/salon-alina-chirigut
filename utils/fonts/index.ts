import { Roboto, Montserrat_Alternates, Rubik } from '@next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300', '500', '700'],
  style: 'normal'
})

export const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '300'],
  style:'normal'
})

export const rubik = Rubik({
  subsets: ['latin'],
  weight: '800',
  style: 'normal'
})