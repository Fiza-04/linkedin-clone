import React from "react";
import "./Header.css";
import {
  faMagnifyingGlass,
  faHouse,
  faUsers,
  faBriefcase,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import HeaderOptions from "./HeaderOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left flex">
        <img
          src="/assets/images/linkedin-logo.png"
          alt="logo"
          className="header-logo"
        />
        <div className="header-search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl text-stone-500"
          />
          <input type="text" className="header-search-input" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions Icon={faHouse} title="Home" />
        <HeaderOptions Icon={faUsers} title="My Network" />
        <HeaderOptions Icon={faBriefcase} title="Jobs" />
        <HeaderOptions Icon={faMessage} title="Messaging" />
        <HeaderOptions Icon={faBell} title="Notifications" />
        <HeaderOptions title="Me" />
      </div>
    </div>
  );
};

export default Header;
