import React from "react";
import { Link } from "react-router-dom";

const EntityDetail = (props) => {
  const { title, sentense, ID, name, description, category } =
    props.location.state.entity;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{sentense}</div>
          <div className="description">{ID}</div>
          <div className="description">{name}</div>
          <div className="description">{description}</div>
          <div className="description">{category}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EntityDetail;
