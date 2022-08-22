import { createContext, useContext, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const transformsCrudContext = createContext();

export function TransformsCrudeContextProvider({ children }) {
  const [transforms, setTransforms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveTransforms = async () => {
    const response = await axios.get("http://localhost:8000/transforms");
    if (response.data) setTransforms(response.data);
  };

  //AddContacts
  const addTransformHandler = async (transform) => {
    const request = {
      id: uuidv4(),
      ...transform,
    };

    const response = await axios.post(
      "http://localhost:8000/transforms",
      request
    );
    console.log("addstransforms");
    //console.log(response.data);
    setTransforms([...transforms, response.data]);
  };

  //update
  const updateTransformHandler = async (transform) => {
    const response = await axios.put(
      `http://localhost:8000/transforms/${transform._id}`,
      transform
    );

    const { _id } = response.data;
    console.log(_id);
    setTransforms(
      transforms.map((transform) => {
        return transform._id === _id ? { ...response.data } : transform;
      })
    );
  };

  //deleteContacts
  const removeTransformHandler = async (_id) => {
    await axios.delete(`http://localhost:8000/entities/${_id}`);
    const newTransformList = transforms.filter((transform) => {
      return transform._id !== _id;
    });

    setTransforms(newTransformList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTransformList = transforms.filter((transform) => {
        return Object.values(transform)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTransformList);
    } else {
      setSearchResults(transforms);
    }
  };

  const value = {
    transforms,
    searchTerm,
    searchResults,
    searchHandler,
    retrieveTransforms,
    removeTransformHandler,
    addTransformHandler,
    updateTransformHandler,
  };

  return (
    <transformsCrudContext.Provider value={value}>
      {children}
    </transformsCrudContext.Provider>
  );
}

export function useTransformsCrud() {
  return useContext(transformsCrudContext);
}
