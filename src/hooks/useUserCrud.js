import axios from "axios";
import { useState } from "react";

const useUserCrud = () => {
  const [users, setUsers] = useState();

  const url = "https://users-crud.academlo.tech/users/";

  // GET
  const getAllUsers = () => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  // POST
  const createNewUser = (data) => {
    axios
      .post(url, data)
      .then((res) => getAllUsers())
      .catch((err) => console.error(err));
  };

  // DELETE
  const deleteUserById = (id) => {
    const urlDelete = `${url}${id}/`;
    axios
      .delete(urlDelete)
      .then((res) => getAllUsers())
      .catch((err) => console.error(err));
  };

  //UPDATE
  const updateUserById = (id, data) => {
    const urlUpdate = `${url}${id}/`;
    axios
      .put(urlUpdate, data)
      .then((res) => getAllUsers())
      .catch((err) => console.error(err));
  };

  return { users, getAllUsers, createNewUser, deleteUserById, updateUserById };
};

export default useUserCrud;
