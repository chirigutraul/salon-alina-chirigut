import { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from 'swr'

interface Iuser{
  name:string;
  age:string;
}

const fetcher = (url:string) => {
  return fetch(url).then(res=>res.json())
}

export default function Home() {
const { data, error } = useSWR('/api/test', fetcher)

if(!data) return "Loading..."

if(error) return "Something went wrong"

return (
  <div className="relative">
  <div className="relative h-screen w-screen">
    <Image
    src={"https://images.unsplash.com/photo-1566410819696-52c5cdba29c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"}
    alt={"Imagine de background despre noi."}
    className={'object-cover'}
    fill={true}
    />
  </div>
  <div className="absolute top-[50%] left-[50%]
  translate-x-[-50%] translate-y-[-50%] bg-white bg-opacity-70 p-16 text-center
  rounded-lg drop-shadow-2xl backdrop-blur
  w-[90%] h-[50%]
  md:h-[40rem] md:w-[40rem]">
    <h1 className="text-4xl text-black py-8">Despre noi</h1>
    <p>
      Noi suntem smecheri si facem unghii faine,
      haide la noi, nu mai fa figuri
    </p>
  </div>
  </div>
  )
}
