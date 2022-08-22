import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useEntitiesCrud } from "../context/EntitiesCrudContext";
import "../styles/content.css";
import "./manage.css";
const notify = () => {
  toast("succussfully added");
};

const EditEntity = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { _id, title, sentense, ID, name, description, category } =
    location.state.entity;

  const [newTitle, setNewTitle] = useState(title);
  const [newSentense, setNewSentense] = useState(sentense);
  const [newID, setNewID] = useState(ID);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newCategory, setNewCategory] = useState(category);
  const { updateEntityHandler } = useEntitiesCrud();

  const update = (e) => {
    e.preventDefault();
    if (
      newTitle === "" ||
      newID === "" ||
      newSentense === "" ||
      newName === "" ||
      newDescription === "" ||
      newCategory === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    updateEntityHandler({
      _id,
      title: newTitle,
      sentense: newSentense,
      ID: newID,
      name: newName,
      description: newDescription,
      category: newCategory,
    });
    setNewTitle("");
    setNewSentense("");
    setNewID("");
    setNewName("");
    setNewDescription("");
    setNewCategory("");
    notify();
    navigate("/manage");
  };

  return (
    <div className="content">
      <div className="Table">
        <div className="ui main">
          <h2>Edit Entity</h2>
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
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Category</label>
              <input
                type="text"
                name="category"
                placeholder="category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
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

export default EditEntity;
