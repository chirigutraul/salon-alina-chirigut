import React from 'react'
import Link from 'next/link'

function ColumnItemWithLink(columnItem:string){
    return (
    <p className='text-1xl text-white my-4' key={columnItem}>
      <Link href={`${columnItem.toLowerCase()}`}>
        {columnItem}
      </Link>
    </p>)
}

function ColumnItemWithoutLink(columnItem:string){
  return <p key={columnItem} className='text-1xl text-white my-4'>{columnItem}</p>
}

function Footer() {
  const columnsArray = [
    [`Adresa:`, `Str.Garii`, `Bloc SMA`, `Scara A`],
    ['Acasa', 'Galerie', 'Despre', 'Programari', 'Contact'],
    ['Contact', 'Telefon: 0769763966', 'Email: chirigutalina@gmail.com'],
  ]
  return (
    <div className='grid grid-cols-3 gap-16 items-center bg-dark-purple'>
      {
        columnsArray.map((column, index:number) => 
        <div className='flex-column text-2xl text-center' key={index}>
          {
          column.map(columnItem =>
            index === 1 
            ? ColumnItemWithLink(columnItem)
            : ColumnItemWithoutLink(columnItem)
          )
          }
        </div>)
      }
    </div>
  )
}

export default Footer