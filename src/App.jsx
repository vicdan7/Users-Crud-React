import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard';
import FormUser from './components/FormUser';
import img from './assets/img.png'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [formClose, setFormClose] = useState(true)

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);
  const [createdModal, setCreatedModal] = useState(false);
  const [userId, setUserId] = useState();


  const {users, getAllUsers, createNewUser, deleteUserById, updateUserById} = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, []);

  const handleOpenForm = () => {
    setFormClose(false)
  }

  const handleDeleteYes = async () => {
    await deleteUserById(userId);
    console.warn("DELETED");
    setConfirmDelete(false);
    setDeletedModal(true);
  };

  const handleDeleteNo = () => {
    setConfirmDelete(false);
  };

  const handleCreated = () => {
    setDeletedModal(false);
  };

  const handleDeleted = () => {
    setCreatedModal(false);
  };


  return (
   <div className='app'>
     <header className='app-header'>
       <h1 className='app-title'>Users</h1>
       <button onClick={handleOpenForm} className='app-btn'>+ Create new user</button>
     </header>
    
     <FormUser 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setFormClose={setFormClose}
      formClose={formClose}
      setCreatedModal={setCreatedModal}
     />
     <div className="app-user_container">
        {users?.length > 0 ? (
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
              setConfirmDelete={setConfirmDelete}
              setUserId={setUserId}
            />
          ))
        ) : (
          <div className='head-style'>
            <h2 className='nousers-style'>No users found</h2>
            <img className='img_user-style' src={img} alt="" />
          </div>
        )}

        {confirmDelete && (
          <div className="modal">
            <div className="modal-container">
              <p>¿Are you sure you want to delete this record?</p>
              <button onClick={handleDeleteYes}>Yes</button>
              <button onClick={handleDeleteNo}>No</button>
            </div>
          </div>
        )}
        {deletedModal && (
          <div className="modal">
            <div className="modal-container">
              <p>Successfully deleted user</p>
              <button onClick={handleCreated}>Ok</button>
            </div>
          </div>
        )}
        {createdModal && (
          <div className="modal">
            <div className="modal-container">
              <p>User added successfully</p>
              <button onClick={handleDeleted}>Ok</button>
            </div>
          </div>
        )}
    </div>
   </div>
  )
}

export default App
