import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../styles/content.css";
import "./manage.css";

const addFormUserHandler = async (tempo) => {
  console.log("test");
  const response = await axios.post("http://localhost:8000/tempos", tempo);

  console.log(response.data);
};

const ContributeWhatYouHave = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    addFormUserHandler({ title, category, description });
    setTitle("");

    setDescription("");
    setCategory("");

    navigate("/");
  };

  return (
    <>
      <div className="content">
        <div className="Table">
          <div className="ui main">
            <h2>contribute what you have and know</h2>
            <form className="ui form" onSubmit={add}>
              <div className="field">
                <label>name or title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="field">
                <label>is it entity or tool</label>
                <input
                  type="text"
                  name="category"
                  placeholder="what is it"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="field">
                <label>please a little description</label>
                <input
                  type="text"
                  name="ID"
                  placeholder="little description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button className="ui button blue">Add</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributeWhatYouHave;
