import React from "react";
import { Link } from "react-router-dom";
import { useEntitiesCrud } from "../context/EntitiesCrudContext";
import "../styles/content.css";

const EntityCard = (props) => {
  const { removeEntityHandler } = useEntitiesCrud();

  const deleteEntity = (_id) => {
    removeEntityHandler(_id);
  };

  const { _id, title, sentense, ID, name, description, category } =
    props.entity;
  return (
    <div className="content">
      <div className="Table" style={{ marginLeft: "-30px" }}>
        <div>
          <h4>{title}</h4>
          <p>{sentense}</p>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Short description</th>
                <th>Category</th>
                <th style={{ borderRight: "none" }}>Sample</th>
              </tr>
              <tr>
                <td>{ID}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="edit">
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
            onClick={() => deleteEntity(_id)}
          ></i>
          <Link to={`/manage/edit`} state={{ entity: props.entity }}>
            <i
              className="edit alternate outline icon"
              style={{ color: "blue", marginTop: "7px" }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntityCard;
