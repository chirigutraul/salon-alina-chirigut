import { PrismaClient } from "@prisma/client"
import { IService } from "types";

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const services = await prisma.service.findMany();

  return {
    props : { services }
  }
}

export default function Programari({
  services
}:{
  services:IService[];
}) {
  return (
    <div className="flex justify-center pb-8 pt-8">
      <form className="bg-blue-400 w-[40rem] grid p-8">
        <label>First name:</label>
        <input 
        type="text"
        id="firstName"
        name="firstName"
        className="p-2 rounded-md drop-shadow-md mb-4"
        />

        <label>Last name:</label>
        <input 
        type="text"
        id="lastName"
        name="lastName"
        className="p-2 rounded-md drop-shadow-md mb-4"
        />
        
        <button
        type="submit"
        className="bg-medium-purple-2 text-white rounded-md w-32 p-4 drop-shadow-lg"
        >
        Submit
        </button>
      </form>
    </div>
  )
}
