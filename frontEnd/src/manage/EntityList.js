import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEntitiesCrud } from "../context/EntitiesCrudContext";
import EntityCard from "./EntityCard";
import "../styles/content.css";
import "./manage.css";

const EntityList = (props) => {
  const {
    entities,
    retrieveEntities,
    searchTerm,
    searchResults,
    searchHandler,
  } = useEntitiesCrud();

  useEffect(() => {
    retrieveEntities();
  });

  const renderEntityList = (
    searchTerm.length < 1 ? entities : searchResults
  ).map((entity) => {
    return (
      <React.Fragment key={entity.ID}>
        {" "}
        <EntityCard entity={entity} />;
      </React.Fragment>
    );
  });

  const onEntitySearch = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <div className="content">
      <div className="main">
        <div className="Table">
          <div className="mlists">
            <Link className="lisItem" to="/manage">
              Entities
            </Link>
            <Link className="lisItem" to="/temporayData">
              Tools
            </Link>
            <Link className="lisItem" to="/manage/transformList">
              Transforms
            </Link>
            <Link className="lisItem" to="/temporayData">
              Procedures
            </Link>
            <Link className="lisItem" to="/temporayData">
              Check temporary datas
            </Link>
          </div>
          <h2>
            Entity List
            <Link to="/manage/add">
              <button className="ui button blue right">Add Entity</button>
            </Link>
          </h2>

          <div className="ui search">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search Entities by their ID, Name, description, or category...."
                className="prompt"
                value={searchTerm}
                onChange={(e) => onEntitySearch(e)}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui celled list">
          {renderEntityList.length > 0
            ? renderEntityList
            : "No Entities available"}
        </div>
      </div>
    </div>
  );
};

export default EntityList;
