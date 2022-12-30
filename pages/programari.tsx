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
    <>
    {
      services.map(service => 
      <h1 className="text-4xl font-bold">
        {service.name}
      </h1>)
    }
      <br></br>
      <h1 className="text-4xl font-bold">
      programarile trebuie sa aiba data, ora, serviciu, status (daca este aprobata sau nu)
      apoi mai am nevoie de un enum pentru status aprobata, respinsa
      
      detalii pentru programari in cazul in care programarea este respinsa
      pe ce motiv ?

      manichiura gel unghie naturala
      manichiura semipermanenta
      pedichiura semipermanent
      stilizare cuticula
      demontare unghii
      intretinere gel
      intretinere semipermanent

      PROGRAMARE SCHEMA 
      id
      nume,
      prenume,
      numar de telefon,
      serviciu pe care il doreste,
      data,
      ora,
      alte adaugari // descriere // comentarii/ alte detalii de la clienti

      serviciul 
      id
      denumire serviciu
      pret serviciu
      descriere serviciu
      durata serviciu

      </h1>
    </>
  )
}
