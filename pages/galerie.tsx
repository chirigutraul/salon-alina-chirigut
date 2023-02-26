import Image from "next/image"
import { useState, useEffect } from "react"
import {motion} from 'framer-motion'

import {CustomModal} from "components"

const imagesArray:string[] = [
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1610992015734-080387c1f66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  "https://images.unsplash.com/photo-1636485830028-1a7663299a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1610992015734-080387c1f66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  "https://images.unsplash.com/photo-1636485830028-1a7663299a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1610992015734-080387c1f66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  "https://images.unsplash.com/photo-1636485830028-1a7663299a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
]

export default function Home() {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>('')
  
  const closeModal = () => {
    setModalVisibility(false)
  }
 
  const openImageModal = (imageUrl:string) => {
    setModalVisibility(true)
    setSelectedImage(imageUrl)
    // set image url to selected Image
    //set modal visibility true
  }

  useEffect(()=>{
    console.log("MODAL VISIBILITY:",modalVisibility)
  },[modalVisibility])

  return (
    <>
    <div className="py-16 text-center bg-secondary">
    <div>
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        Galerie Clienti
      </h1>
    </div>
    <CustomModal
    isOpen={modalVisibility}
    onRequestClose={closeModal}
    >
      <div className="relative w-full h-full">
      <Image
      src={selectedImage}
      alt={'Client al salonului Ally Nails'}
      fill={true}
      className={'object-cover'}
      />
      </div>
    </CustomModal> 
    {/* large styling grid grid-cols-4 p-16 gap-16 */}
    {/* className="relative h-64 cursor-pointer w-128 hover:shadow-2xl" */}
    <div className="grid grid-cols-1 gap-8 my-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> 
        {
          imagesArray.map((image, index:number)=>
            <motion.div
            onClick={() => openImageModal(image)}
            whileHover={{scale:1.1}}
            whileTap={{scale:1.1}}
            transition={{duration:0.2}}
            className="flex w-screen h-96 relative cursor-pointer hover:shadow-2xl justify-self-center
            md:w-96 md:h-72
            lg:w-[30rem] md:h-96
            xl:w-96
            2xl:w-128"
            key={index}>
            <Image
            src={image}
            className='object-cover drop-shadow-md'
            fill={true}
            alt='Manichiura client'
            sizes={'(max-width:1920px) theme(w-128)'}
            />
            </motion.div>
          )
        }
    </div>
    </div>
    </>
  )
}
