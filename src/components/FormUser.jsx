import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";
import { useEffect } from "react";
import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose, setCreatedModal }) => {
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo]);

  const submit = (data) => {
    if(updateInfo) {
      updateUserById(updateInfo.id, data)
      setUpdateInfo()
    } else {
      createNewUser(data);
      setCreatedModal(true);
    }
    handleExit();
    reset(defaultValues);
  }

  const handleExit = () => {
    setFormClose(true)
  }

  return (
    <div className={`form-container ${formClose && 'close'}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h3 className="form-title">{updateInfo ? 'Update User Info' : 'Create New User'}</h3>
        <span onClick={handleExit} className="form-exit">x</span>
       <div className="form-item">
         <label className="form-label" htmlFor="email">Email</label>
         <input className="form-input"  {...register("email", { required: true })} type="email" id="email" />
       </div>
       <div className="form-item">
         <label className="form-label" htmlFor="password">Password</label>
         <input className="form-input" {...register("password", { required: true })} type="password" id="password" />
       </div>
       <div className="form-item">
         <label className="form-label" htmlFor="first_name">First Name</label>
         <input className="form-input" {...register("first_name", { required: true })} type="text" id="first_name" />
       </div>
       <div className="form-item">
         <label className="form-label" htmlFor="last_name">Last Name</label>
         <input className="form-input" {...register("last_name", { required: true })} type="text" id="last_name" />
       </div>
       <div className="form-item">
         <label className="form-label" htmlFor="birthday">Birthday</label>
         <input className="form-input" {...register("birthday", { required: true })} type="date" id="birthday" />
       </div>
        <button type="submit" className="form-btn">{updateInfo ? 'Update' : 'Create'}</button>
      </form>
    </div>
    
  );
};

export default FormUser;
