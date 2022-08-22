import { createContext, useContext, useState } from "react";
import axios from "axios";
import { uuid } from "uuidv4";

const usersCrudContext = createContext();

export function UsersCrudeContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetrieveContacts
  const retrieveUsers = async () => {
    const response = await axios.get("http://localhost:8000/users");
    if (response.data) setUsers(response.data);
  };

  //AddContacts
  const addUserHandler = async (user) => {
    console.log(user);
    const request = {
      id: uuid(),
      ...user,
    };

    const response = await axios.post("http://localhost:8000/users", request);
    console.log(response);
    setUsers([...users, response.data]);
  };

  //update
  const updateUserHandler = async (user) => {
    const response = await axios.put(
      `http://localhost:8000/users/${user._id}`,
      user
    );
    const { _id } = response.data;
    setUsers(
      users.map((user) => {
        return user._id === _id ? { ...response.data } : user;
      })
    );
  };

  //deleteContacts
  const removeUserHandler = async (_id) => {
    await axios.delete(`http://localhost:8000/users/${_id}`);
    const newUserList = users.filter((user) => {
      return user._id !== _id;
    });

    setUsers(newUserList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newUserList = users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newUserList);
    } else {
      setSearchResults(users);
    }
  };

  const value = {
    users,
    searchTerm,
    searchResults,
    searchHandler,
    retrieveUsers,
    removeUserHandler,
    addUserHandler,
    updateUserHandler,
  };

  return (
    <usersCrudContext.Provider value={value}>
      {children}
    </usersCrudContext.Provider>
  );
}

export function useUsersCrud() {
  return useContext(usersCrudContext);
}
