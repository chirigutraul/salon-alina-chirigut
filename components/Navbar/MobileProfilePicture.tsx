import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { useRouter } from "next/router";

interface ProfilePictureProps {
  image: string;
  name: string;
}

const MobileProfilePicture: FunctionComponent<ProfilePictureProps> = ({image, name}) => {
  const router = useRouter()

  return (
    <div 
    onClick={()=>router.push('/profile')}
    className={'flex flex-row items-center cursor-pointer w-full'}
    >
      {
      image &&
    <div className={`
    h-16 w-16 relative mr-4 rounded-full overflow-hidden
    `}>
      <Image
      src={image}
      alt="Picture of the author"
      fill
      />
    </div>
    }
    <p className={`
    text-white font-sans font-medium text-xl
    `}>{name.toUpperCase()}</p>
    </div>
  )
}

export default MobileProfilePicture