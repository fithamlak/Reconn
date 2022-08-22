import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTransformsCrud } from "../context/TransformsCrudContext";
import TransformCard from "./TransformCard";
import "../styles/content.css";
import "./manage.css";

const TransformList = (props) => {
  const {
    transforms,
    retrieveTransforms,
    searchTerm,
    searchResults,
    searchHandler,
  } = useTransformsCrud();

  useEffect(() => {
    retrieveTransforms();
  });

  const renderTransformList = (
    searchTerm.length < 1 ? transforms : searchResults
  ).map((transform) => {
    return (
      <React.Fragment key={transform.ID}>
        {" "}
        <TransformCard transform={transform} />;
      </React.Fragment>
    );
  });

  const onTransformSearch = (e) => {
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
            <Link className="lisItem" to="/manage/transform">
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
            Transform List
            <Link to="/manage/addTransform">
              <button className="ui button blue right">Add Transform</button>
            </Link>
          </h2>

          <div className="ui search">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search Transforms by their ID, Name, description, or category...."
                className="prompt"
                value={searchTerm}
                onChange={(e) => onTransformSearch(e)}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui celled list">
          {renderTransformList.length > 0
            ? renderTransformList
            : "No Transform available"}
        </div>
      </div>
    </div>
  );
};

export default TransformList;
