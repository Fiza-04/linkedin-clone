import React from "react";
import "./Sidebar.css";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => {
    return (
      <div className="sidebar-recentItems">
        <span className="sidebar-icon">
          <FontAwesomeIcon icon={faUsers} />
        </span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="/assets/images/linked-bgimage.jpeg"
          alt="bg-image"
          className="sidebar-top-img"
        />
        <Avatar src={user.photoUrl}>{user.displayName[0]}</Avatar>
        <h2>
          <b>{user.displayName}</b>
        </h2>
        <h4>
          <b>{user.email}</b>
        </h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,973</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2,333</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("FullStack Titans")}
        {recentItems("Software Developer")}
        {recentItems("Machine Learning")}
        {recentItems("Artificial Intelligence")}
        {recentItems("ReactJS")}
      </div>
    </div>
  );
}

export default Sidebar;
