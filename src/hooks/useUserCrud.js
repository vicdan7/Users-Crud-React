import axios from "axios";
import { useState } from "react";

const useUserCrud = () => {
  const [users, setUsers] = useState();

  const url = "https://users-crud.academlo.tech/users/";

  // GET
  const getAllUsers = () => {
    axios
      .get('https://crud-user-9fli.onrender.com/api/v1/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  // POST
  const createNewUser = (data) => {
    axios
      .post('https://crud-user-9fli.onrender.com/api/v1/users', data)
      .then((res) => getAllUsers())
      .catch((err) => console.error(err));
  };

  // DELETE
  const deleteUserById = (id) => {
    const urlDelete = `https://crud-user-9fli.onrender.com/api/v1/users/${id}`;
    axios
      .delete(urlDelete)
      .then((res) => getAllUsers())
      .catch((err) => console.error(err));
  };

  //UPDATE
  const updateUserById = (id, data) => {
    const urlUpdate = `https://crud-user-9fli.onrender.com/api/v1/users/${id}`;
    axios
      .put(urlUpdate, data)
      .then((res) => getAllUsers())
      .catch((err) => console.error(err));
  };

  return { users, getAllUsers, createNewUser, deleteUserById, updateUserById };
};

export default useUserCrud;
