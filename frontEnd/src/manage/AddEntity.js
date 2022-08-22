import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEntitiesCrud } from "../context/EntitiesCrudContext";
import "../styles/content.css";
import "./manage.css";

const AddEntity = () => {
  const [title, setTitle] = useState("");
  const [sentense, setSentense] = useState("");
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { addEntityHandler } = useEntitiesCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      ID === "" ||
      sentense === "" ||
      name === "" ||
      description === "" ||
      category === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    addEntityHandler({ title, sentense, ID, name, description, category });
    setTitle("");
    setSentense("");
    setID("");
    setName("");
    setDescription("");
    setCategory("");
    toast("succefully added");
    navigate("/manage");
  };

  return (
    <>
      <div className="content">
        <div className="Table">
          <div className="ui main">
            <h2>Add Entities</h2>
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
                <label>description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="field">
                <label>category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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

export default AddEntity;
