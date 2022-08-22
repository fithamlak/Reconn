import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUsersCrud } from "../context/UsersCrudContext";
import UserCard from "./UserCard";
import "../styles/content.css";
import "./manage.css";

const UserList = (props) => {
  const { users, retrieveUsers, searchTerm, searchResults, searchHandler } =
    useUsersCrud();

  useEffect(() => {
    retrieveUsers();
  });

  const renderUserList = (searchTerm.length < 1 ? users : searchResults).map(
    (user) => {
      return (
        <React.Fragment key={user.email}>
          <UserCard user={user} />;
        </React.Fragment>
      );
    }
  );

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <div className="content">
      <div className="main">
        <div className="Table">
          <h2>
            User List
            <Link to="/add">
              <button className="ui button blue right">Add Users</button>
            </Link>
          </h2>
          <div className="ui search">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search Contacts"
                className="prompt"
                value={searchTerm}
                onChange={(e) => onUserSearch(e)}
              />
              <i className="search icon"></i>
            </div>
          </div>
          <div className="ui celled list">
            {renderUserList.length > 0
              ? renderUserList
              : "No Contacts available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
