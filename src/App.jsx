import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard';
import FormUser from './components/FormUser';

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [formClose, setFormClose] = useState(true)

  const {users, getAllUsers, createNewUser, deleteUserById, updateUserById} = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, []);

  const handleOpenForm = () => {
    setFormClose(false)
  }


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
     />
     <div className='app-user_container'>
       {
        users?.map(user=> (
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormClose={setFormClose}
          />
        ))
      }
    </div>
   </div>
  )
}

export default App
