import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
const imagesArray: string[] = [
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
];

export default function Home() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const closeModal = () => {
    setModalVisibility(false);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalVisibility(true);
  };

  return (
    <section className={`bg-white text-black nav-pad`}>
      <div className={`text-center sp-2v`}>
        <h1>Galerie</h1>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 sp-h
        md:grid-cols-2 xl:grid-cols-3
      `}
      >
        {imagesArray.map((image, index: number) => (
          <motion.div
            onClick={() => openImageModal(image)}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative w-full cursor-pointer aspect-square"
            key={index}
          >
            <Image
              src={image}
              className="object-cover drop-shadow-md"
              fill={true}
              alt="Manichiura client"
              sizes={"(max-width:1920px) theme(w-128)"}
            />
          </motion.div>
        ))}
      </div>
      <ReactModal
        isOpen={modalVisibility}
        onRequestClose={closeModal}
        className={`w-full aspect-square top-[50%] left-[50%] -translate-x-1/2  -translate-y-1/2 absolute
        md:w-[80%]
        `}
        overlayClassName={`fixed inset-0 bg-black-50 z-20`}
      >
        <div className="relative w-full aspect-square">
          <Image
            src={selectedImage}
            className="object-cover"
            fill={true}
            alt="Manichiura client"
          />
        </div>
      </ReactModal>
    </section>
  );
}
