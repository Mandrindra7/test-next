import { useEffect, useState } from "react";
import Image from "next/image";

import { filters, lastSearch } from "@/utils/data";
import { Job } from "@/utils/type";

import "@/assets/css/sidebar.scss";

import Resumizeme from "../../public/icon/Resumizeme.svg";
import template from "../../public/icon/icontemplate.svg";
import search from "../../public/icon/search.svg";
import star from "../../public/icon/star.png";
import clock from "../../public/icon/clock.svg";
import board from "../../public/icon/board.svg";
import add from "../../public/icon/add.svg";
import dividers from "../../public/icon/dividers.png";
import padlock from "../../public/icon/padlock.jpeg";
import setting from "../../public/icon/settings.svg";
import carla from "../../public/icon/img.png";

const SideBar = () => {
  const [lastSearchs, setLastSearchs] = useState<Job[]>([]);

  useEffect(() => {
    setLastSearchs(lastSearch);
  });

  return (
    <div className="sidebar">
      <Image className="logo" src={Resumizeme} alt="template" />
      <div className="divider"></div>
      <div className="nav">
        <div className="content">
          <Image src={template} alt="template" />
          <span>My templates</span>
        </div>
        <div className="search">
          <Image src={search} alt="search" />
          <span>search</span>
        </div>
        <div className="filter">
          {filters.length &&
            filters.map((filter) => (
              <li className="item" key={filter.id}>
                <Image className="star" src={star} alt="star" />
                <span>{filter.name}</span>
              </li>
            ))}
          {lastSearchs.length &&
            lastSearchs.map((lastSearch) => (
              <li className="item" key={lastSearch.id}>
                <Image className="clock" src={clock} alt="clock" />
                <span>{lastSearch.name}</span>
              </li>
            ))}
        </div>
        <div className="board">
          <div className="box">
            <Image src={board} alt="board" />
            <span>My boards</span>
          </div>

          <Image style={{ paddingRight: "16px" }} src={add} alt="add" />
        </div>
        <div className="list-board">
          {[1, 2, 3].map((item) => (
            <li className="item" key={item}>
              <Image className="divider" src={dividers} alt="dividers" />
              <span>Board {item}</span>
            </li>
          ))}
          {[1, 2, 3].map((item) => (
            <li className="item" key={item}>
              <Image className="divider" src={padlock} alt="padlock" />
              <span>Board agent {item}</span>
            </li>
          ))}
        </div>
      </div>
      <div className="divider"></div>
      <div className="settings">
        <div className="profile">
          <Image src={carla} alt="carla" />
          <span>Carla</span>
        </div>

        <Image src={setting} alt="setting" />
      </div>
    </div>
  );
};

export default SideBar;
