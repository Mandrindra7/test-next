import React from "react";
import Image from "next/image";

import career from "../../public/icon/career.svg";

import "@/assets/css/banner.scss"

const Banner: React.FC = () => {
  return (
    <div className="type">
      <Image className="logo" src={career} alt="career" />
      <div className="description">
        <span className="title">Premium Account</span>
        <span className="paragraph">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </span>
      </div>
    </div>
  );
};

export default Banner;
