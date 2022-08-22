import React from "react";
import { Link } from "react-router-dom";
import userm from "../images/user.jpg";

const UserDetail = (props) => {
  const { name, email } = props.location.state.user;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={userm} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to user List</button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
