import './styles/userCard.css'

const UserCard = ({  user,
  setUpdateInfo,
  setFormClose,
  setConfirmDelete,
  setUserId, }) => {

const handleDelete = () => {
    setUserId(user.id);
    setConfirmDelete(true);
};

const handleUpdate = () => {
  setUpdateInfo(user)
  setFormClose(false);
}

  return (
    <article className="user">
        <h2 className="user-name">{user.first_name} {user.last_name}</h2>
        <ul className="user-list">
            <li className="user-item"><span className="user-label">Email: </span><span className="user-value">{user.email}</span></li>
            <li className="user-item"><span className="user-label"><i className='bx bxs-cake'></i> Birthday: </span><span className="user-value">{user.birthday}</span></li>
        </ul>
        <footer className="user-footer">
            <button className="user-btn user-delete" onClick={handleDelete}><i className='bx bxs-trash user-icons'></i></button>
            <button className="user-btn user-update" onClick={handleUpdate}><i className='bx bx-edit-alt user-icons'></i></button>
        </footer>
    </article>
  );
}

export default UserCard;
