import React from "react";
import Image from "next/image";

import Input from "./Input";
import peter from "../../public/icon/peter.svg";
import badge from "../../public/icon/badge.svg";

import "@/assets/css/profile.scss";

import { User } from "../utils/type";


const ProfileForm: React.FC<User> = ({
  firstName,
  lastName,
  city,
  postalCode,
  address,
  email,
  phone,
}) => {
  return (
    <div className="profile">
      <div className="form">
        <div className="info">
          <Input label="First Name" type="text" value={firstName} />
        </div>
        <div className="info">
          <Input label="Last Name" type="text" value={lastName} />
        </div>
        <div className="info">
          <Input label="City" type="text" value={city} />
        </div>
        <div className="info">
          <Input label="Postal Code" type="text" value={postalCode} />
        </div>

        <div className="address">
          <Input label="Address" type="text" value={address} />
        </div>

        <div className="info">
          <Input label="Email" type="email" value={email} />
          <Image className="badge" src={badge} alt="badge" />
        </div>
        <div className="info">
          <Input label="Phone" type="tel" value={phone} />
        </div>
        <div className="password">
          <Input label="Password" type="password" value="Password" />
        </div>
      </div>
      <div className="picture">
        <Image src={peter} alt="peter" />
      </div>
    </div>
  );
};

export default ProfileForm;
