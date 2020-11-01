import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

// this one is for rendering menu items on the page
// we used the HOC so we can get access to the history and match props
// we used redirecting with history.push

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`menu-item ${size} `}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);
export default withRouter(MenuItem);
