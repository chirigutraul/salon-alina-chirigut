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
    <header className="flex top-0 left-0 right-0 items-center bg-red-200 h-32 gap-x-0">
      <div className="flex-shrink-0 px-16">
        <Image 
        src={"/images/dark logo.png"}
        alt="Logo salon"
        width={256}
        height={64}
        />
      </div>
      <div className="flex flex-auto gap-x-1 text-center">
        {
        navbarOptions.map((option:string) => 
          <Link
          key={option} 
          href={option.split(" ")[0].toLowerCase()} 
          className="text-2xl flex-1">
            {option}
          </Link>)
        }
      </div>
      <div className="justify-center text-center px-16">
        <p className="w-64">ICONS</p>
      </div>
    </header>
  )
}
