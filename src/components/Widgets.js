import { faCircle, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subTitle, readers) => {
    return (
      <div className="widgets-article">
        <h4>{heading}</h4>
        <p>
          {subTitle} <FontAwesomeIcon icon={faCircle} className="widgets-dot" />{" "}
          {readers}
        </p>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>

      <p>Top Stories</p>

      {newsArticle("MERN stack on the BOOM!", "Top News", "999 readers")}
      {newsArticle("MERN stack on the BOOM!", "Top News", "999 readers")}
      {newsArticle("MERN stack on the BOOM!", "Top News", "999 readers")}
      {newsArticle("MERN stack on the BOOM!", "Top News", "999 readers")}
      {newsArticle("MERN stack on the BOOM!", "Top News", "999 readers")}
    </div>
  );
}

export default Widgets;
