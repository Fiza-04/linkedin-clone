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
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "./Firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
          <input
            type="text"
            placeholder="Search..."
            className="header-search-input"
          />
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions Icon={faHouse} title="Home" />
        <HeaderOptions Icon={faUsers} title="My Network" />
        <HeaderOptions Icon={faBriefcase} title="Jobs" />
        <HeaderOptions Icon={faMessage} title="Messaging" />
        <HeaderOptions Icon={faBell} title="Notifications" />
        <HeaderOptions title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
