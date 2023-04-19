import Image from "next/image";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { roboto } from "utils/fonts";
import { signOut } from "next-auth/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

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
      className={
        "flex flex-row items-center justify-center cursor-pointer relative group"
      }
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
        text-xl text-white ${roboto.className} 
        md:text-base 
        xl:text-xl
        `}
      >
        {name.toUpperCase()}
      </p>
      <div
        className={`
      hidden absolute top-[99%] right-0 w-44 bg-pink-100 group overflow-hidden z-50
      rounded-md shadow-lg
      group-hover:block
      `}
      >
        <ul
          className={`text-xl flex flex-col items-center justify-center ${roboto.className} font-light`}
        >
          <li
            className={`w-full py-2 hover:bg-black hover:bg-opacity-10`}
            onClick={() => router.push("/profile")}
          >
            <span className={"flex flex-row ml-4 items-center"}>
              {/* <FontAwesomeIcon icon={faUser} className={`text-xl mr-2`} /> */}
              <p>Profil</p>
            </span>
          </li>
          <li
            className={`w-full py-2 hover:bg-black hover:bg-opacity-10`}
            onClick={() => signOut()}
          >
            <span className={"flex flex-row ml-4 items-center"}>
              {/* <FontAwesomeIcon icon={faSignOut} className={`text-xl mr-2`} /> */}
              <p>Deconectare</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePicture;
