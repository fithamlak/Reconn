import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useTransformsCrud } from "../context/TransformsCrudContext";
import "../styles/content.css";
import "./manage.css";
const notify = () => {
  toast("succussfully added");
};

const EditTransform = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  } = location.state.transform;

  const [newTitle, setNewTitle] = useState(title);
  const [newSentense, setNewSentense] = useState(sentense);
  const [newID, setNewID] = useState(ID);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newInputEntity, setNewInputEntity] = useState(inputEntity);
  const [newOutputEntity, setNewOutputEntity] = useState(outputEntity);
  const [newRecerseFlag, setNewReverseFlag] = useState(reverseFlag);
  const [newUsedTool, setNewUsedTool] = useState(usedTool);
  const { updateTransformHandler } = useTransformsCrud();

  const update = (e) => {
    e.preventDefault();
    if (
      newTitle === "" ||
      newID === "" ||
      newSentense === "" ||
      newName === "" ||
      newDescription === "" ||
      newInputEntity === "" ||
      newOutputEntity === "" ||
      newRecerseFlag === "" ||
      newUsedTool === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    updateTransformHandler({
      _id,
      title: newTitle,
      sentense: newSentense,
      ID: newID,
      name: newName,
      description: newDescription,
      inputEntity: newInputEntity,
      outputEntity: newOutputEntity,
      reverseFlag: newRecerseFlag,
      usedTool: newUsedTool,
    });
    setNewTitle("");
    setNewSentense("");
    setNewID("");
    setNewName("");
    setNewDescription("");
    setNewInputEntity("");
    setNewOutputEntity("");
    setNewReverseFlag("");
    setNewUsedTool("");
    notify();
    navigate("manage/transformList");
  };

  return (
    <div className="content">
      <div className="Table">
        <div className="ui main">
          <h2>Edit Transform</h2>
          <form className="ui form" onSubmit={update}>
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Sentense</label>
              <input
                type="text"
                name="sentense"
                placeholder="Sentense"
                value={newSentense}
                onChange={(e) => setNewSentense(e.target.value)}
              />
            </div>
            <div className="field">
              <label>ID</label>
              <input
                type="text"
                name="ID"
                placeholder="ID"
                value={newID}
                onChange={(e) => setNewID(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Input Entity</label>
              <input
                type="text"
                name="inputEntity"
                placeholder="Input Entity"
                value={newInputEntity}
                onChange={(e) => setNewInputEntity(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Output Entity</label>
              <input
                type="text"
                name="outputEntity"
                placeholder="Output Entity"
                value={newOutputEntity}
                onChange={(e) => setNewOutputEntity(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Reverse Flag</label>
              <input
                type="text"
                name="reverseFlag"
                placeholder="Reverse Flag"
                value={newRecerseFlag}
                onChange={(e) => setNewReverseFlag(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Used Tool</label>
              <input
                type="text"
                name="usedTool"
                placeholder="Used Tool"
                value={newUsedTool}
                onChange={(e) => setNewUsedTool(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>

            <button className="ui button blue">Update</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditTransform;
