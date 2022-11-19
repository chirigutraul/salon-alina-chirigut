import { useState, useEffect } from "react";
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
  <>
    <h1 className='text-5xl'>
      Name: {data.name}
    </h1>
    <h1 className='text-5xl'>
    Age: {data.age}
    </h1>
  </>
  )
}
