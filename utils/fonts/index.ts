import { Roboto, Montserrat_Alternates, Rubik } from '@next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
  style: 'normal'
})

export const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '100',
  style:'italic'
})

export const rubik = Rubik({
  subsets: ['latin'],
  weight: '800',
  style: 'normal'
})

export const fs = {
  roboto: {
    'md' : `${roboto.className} text-md`,
    'lg' : `${roboto.className} text-lg`,
    'xl' : `${roboto.className} text-xl`,
    '2xl' : `${roboto.className} text-2xl`,
    '3xl' : `${roboto.className} text-3xl`,
    '4xl' : `${roboto.className} text-4xl`,
    '5xl' : `${roboto.className} text-5xl`,
  },
  montserrat: {
    'md' : `${montserrat.className} text-md`,
    'lg' : `${montserrat.className} text-lg`,
    'xl' : `${montserrat.className} text-xl`,
    '2xl' : `${montserrat.className} text-2xl`,
    '3xl' : `${montserrat.className} text-3xl`,
    '4xl' : `${montserrat.className} text-4xl`,
    '5xl' : `${montserrat.className} text-5xl`,
  },
  rubik: {
    'md' : `${rubik.className} text-md`,
    'lg' : `${rubik.className} text-lg`,
    'xl' : `${rubik.className} text-xl`,
    '2xl' : `${rubik.className} text-2xl`,
    '3xl' : `${rubik.className} text-3xl`,
    '4xl' : `${rubik.className} text-4xl`,
    '5xl' : `${rubik.className} text-5xl`,
  },
}