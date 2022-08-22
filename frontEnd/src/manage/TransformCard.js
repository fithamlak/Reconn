import React from "react";
import { Link } from "react-router-dom";
import { useTransformsCrud } from "../context/TransformsCrudContext";
import "../styles/content.css";

const TransformCard = (props) => {
  const { removeTransformHandler } = useTransformsCrud();

  const deleteTransform = (_id) => {
    removeTransformHandler(_id);
  };

  const {
    _id,
    title,
    sentense,
    ID,
    name,
    description,
    inputEntity,
    outputEntity,
    reverseFlag,
    usedTool,
  } = props.transform;
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
                <th>Input Entity</th>
                <th>Output Entity</th>
                <th>Reverse Flag</th>
                <th>Used Tool</th>
                <th>description</th>

                <th style={{ borderRight: "none" }}>Sample</th>
              </tr>
              <tr>
                <td>{ID}</td>
                <td>{name}</td>
                <td>{inputEntity}</td>
                <td>{outputEntity}</td>
                <td>{reverseFlag}</td>
                <td>{usedTool}</td>
                <td>{description}</td>

                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="edit">
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
            onClick={() => deleteTransform(_id)}
          ></i>
          <Link
            to={`/manage/transform/edit`}
            state={{ transform: props.transform }}
          >
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

export default TransformCard;
