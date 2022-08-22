import { createContext, useContext, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const entitiesCrudContext = createContext();

export function EntitiesCrudeContextProvider({ children }) {
  const [entities, setEntities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveEntities = async () => {
    const response = await axios.get("http://localhost:8000/entities");
    if (response.data) setEntities(response.data);
  };

  //AddContacts
  const addEntityHandler = async (entity) => {
    const request = {
      id: uuidv4(),
      ...entity,
    };

    const response = await axios.post(
      "http://localhost:8000/entities",
      request
    );

    console.log(response.data);
    setEntities([...entities, response.data]);
  };

  //update
  const updateEntityHandler = async (entity) => {
    const response = await axios.put(
      `http://localhost:8000/entities/${entity._id}`,
      entity
    );

    const { _id } = response.data;
    console.log(_id);
    setEntities(
      entities.map((entity) => {
        return entity._id === _id ? { ...response.data } : entity;
      })
    );
  };

  //deleteContacts
  const removeEntityHandler = async (_id) => {
    await axios.delete(`http://localhost:8000/entities/${_id}`);
    const newEntityList = entities.filter((entity) => {
      return entity._id !== _id;
    });

    setEntities(newEntityList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newEntityList = entities.filter((entity) => {
        return Object.values(entity)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newEntityList);
    } else {
      setSearchResults(entities);
    }
  };

  const value = {
    entities,
    searchTerm,
    searchResults,
    searchHandler,
    retrieveEntities,
    removeEntityHandler,
    addEntityHandler,
    updateEntityHandler,
  };

  return (
    <entitiesCrudContext.Provider value={value}>
      {children}
    </entitiesCrudContext.Provider>
  );
}

export function useEntitiesCrud() {
  return useContext(entitiesCrudContext);
}
