import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomModal from "components/CustomModal";
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
    setModalVisibility(true);
    setSelectedImage(imageUrl);
  };

  return (
    <section className={`bg-white text-black nav-pad`}>
      <div className={`text-center sp-2v`}>
        <h1>Galerie</h1>
      </div>
      <CustomModal isOpen={modalVisibility} onRequestClose={closeModal}>
        <div className="relative w-full h-full">
          <Image
            src={selectedImage}
            className="object-cover"
            fill={true}
            alt="Manichiura client"
          />
        </div>
      </CustomModal>
      <div
        className={`grid grid-cols-1 gap-4
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
    </section>
  );
}
