import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const navbarOptions = [
    "Acasa",
    "Galerie",
    "Despre",
    "Programari",
    "Contact",
  ]

  return (
    <header className="flex absolute z-10 top-0 left-0 right-0 items-center bg-light-pink h-24 gap-x-0">
      <div className="flex-shrink-0 relative h-24 w-64 mx-16">
        <Image 
        src={"/images/dark logo.png"}
        alt="Logo salon"
        fill={true}
        priority
        sizes="(max-width:1920px) theme(w-64)"
        />
      </div>
      <div className="flex flex-auto gap-x-1 text-center">
        {
        navbarOptions.map((option:string) => 
          <Link
          key={option} 
          href={
          option==="Acasa" 
          ? "/" 
          : option.split(" ")[0].toLowerCase()
          } 
          className="text-2xl flex-1"
          >
            {option}
          </Link>)
        }
      </div>
      <div className="grid grid-cols-2 gap-x-16 justify-center text-center px-16">
        <Image 
        src={"/icons/Instagram.svg"}
        alt="Instagram icon"
        width={32}
        height={32}
        />
        <Image 
        src={"/icons/Facebook.svg"}
        alt="Facebook icon"
        width={32}
        height={32}
        />
      </div>
    </header>
  )
}
