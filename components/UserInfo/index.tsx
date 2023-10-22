import { Session } from "next-auth";
import Image from "next/image";
import React, { FunctionComponent } from "react";

interface UserInfoProps {
  session: Session;
}
const UserInfo: FunctionComponent<UserInfoProps> = ({ session }) => {
  return (
    <div className={`bg-black-50 sp-h sp-v rounded-lg`}>
      <div className={`flex flex-col items-center`}>
        <div className={`w-32 h-32 relative rounded-full overflow-hidden`}>
          <Image
            fill={true}
            src={session.user.image}
            alt="Imaginea de profil"
            className={`object-cover`}
          />
        </div>
        <h4 className={`sp-t`}>{session.user.name}</h4>
      </div>
      <div className={`sp-t overflow-auto`}>
        <span className={`flex gap-2 items-end`}>
          <h5>Email:</h5>
          <h6>{session.user.email}</h6>
        </span>
        <span className={`flex gap-2 items-end sp-1/2t`}>
          <h5>Telefon:</h5>
          <h6>{session.user.phone}</h6>
        </span>
      </div>
    </div>
  );
};

export default UserInfo