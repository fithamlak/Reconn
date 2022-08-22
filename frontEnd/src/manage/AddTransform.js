import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransformsCrud } from "../context/TransformsCrudContext";
import "../styles/content.css";
import "./manage.css";

const AddTransform = () => {
  const [title, setTitle] = useState("");
  const [sentense, setSentense] = useState("");
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [inputEntity, setInputEntity] = useState("");
  const [outputEntity, setOutputEntity] = useState("");
  const [reverseFlag, setReverseFlag] = useState("");
  const [usedTool, setUsedTool] = useState("");
  const [description, setDescription] = useState("");
  const { addTransformHandler } = useTransformsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      ID === "" ||
      sentense === "" ||
      name === "" ||
      inputEntity === "" ||
      outputEntity === "" ||
      reverseFlag === "" ||
      usedTool === "" ||
      description === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    addTransformHandler({
      title,
      sentense,
      ID,
      name,
      description,
      inputEntity,
      outputEntity,
      reverseFlag,
      usedTool,
    });
    setTitle("");
    setSentense("");
    setID("");
    setName("");
    setDescription("");
    setInputEntity("");
    setOutputEntity("");
    setReverseFlag("");
    setUsedTool("");
    toast("succefully added");
    navigate("/manage/transformList");
  };

  return (
    <>
      <div className="content">
        <div className="Table">
          <div className="ui main">
            <h2>Add Transforms</h2>
            <form className="ui form" onSubmit={add}>
              <div className="field">
                <label>title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="field">
                <label>sentense</label>
                <input
                  type="text"
                  name="sentense"
                  placeholder="Sentense"
                  value={sentense}
                  onChange={(e) => setSentense(e.target.value)}
                />
              </div>
              <div className="field">
                <label>ID</label>
                <input
                  type="text"
                  name="ID"
                  placeholder="ID"
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Input Entity</label>
                <input
                  type="text"
                  name="inputEntity"
                  placeholder="Input Entity"
                  value={inputEntity}
                  onChange={(e) => setInputEntity(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Output Entity</label>
                <input
                  type="text"
                  name="outputEntity"
                  placeholder="Output Entity"
                  value={outputEntity}
                  onChange={(e) => setOutputEntity(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Reverse Flag</label>
                <input
                  type="text"
                  name="reverseFlag"
                  placeholder="Reverse Flag"
                  value={reverseFlag}
                  onChange={(e) => setReverseFlag(e.target.value)}
                />
              </div>

              <div className="field">
                <label>used Tool</label>
                <input
                  type="text"
                  name="usedTool"
                  placeholder="Used Tool"
                  value={usedTool}
                  onChange={(e) => setUsedTool(e.target.value)}
                />
              </div>
              <div className="field">
                <label>description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button className="ui button blue">Add</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddTransform;
