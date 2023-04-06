import Image from "next/image";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";

interface ProfilePictureProps {
  image: string;
  name: string;
}

const ProfilePicture: FunctionComponent<ProfilePictureProps> = ({
  image,
  name,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/profile")}
      className={"flex flex-row items-center justify-center cursor-pointer"}
    >
      {image && (
        <div
          className={`
    h-16 w-16 relative mr-4 rounded-full overflow-hidden
    md:h-10 md:w-10 md:mr-2
    xl:h-12 xl:w-12 xl:mr-4
    `}
        >
          <Image src={image} alt="Picture of the author" fill />
        </div>
      )}
      <p
        className={`
    text-xl text-white
    md:text-base
    xl:text-xl
    `}
      >
        {name.toUpperCase()}
      </p>
    </div>
  );
};

export default ProfilePicture;
