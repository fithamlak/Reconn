import React from "react";
import { Link } from "react-router-dom";
import { useUsersCrud } from "../context/UsersCrudContext";
import userm from "../images/user.png";

const UserCard = (props) => {
  const { removeUserHandler } = useUsersCrud();

  const deleteUser = (id) => {
    removeUserHandler(id);
  };

  const { id, name, email } = props.user;
  return (
    <div className="item">
      <img className="ui avatar image" src={userm} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/user/${id}`, state: { user: props.user } }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => deleteUser(id)}
      ></i>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default UserCard;
