import { useState } from "react";
import validate from "./Validate.jsx";
import style from "./Form.module.css";

export default function Form(props){

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({});
    
    const handleChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value,
        })
        setErrors(
            validate({
            ...userData,
            [evento.target.name]: evento.target.value,
          }))
    }   

    const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData);
      }

    return (
        <div className={style.container}>
        <form onSubmit={handleSubmit}>
            <label>EMAIL </label>
            <input
                name="email"
                placeholder="Email"
                type="text"
                value={userData.email}
                onChange={handleChange}/>
                <p className={style.error}>{errors.email?errors.email:null}</p>
            
            <label>PASSWORD </label>
            <input
                name="password"
                placeholder="Password"
                type="password"
                value={userData.password}
                onChange={handleChange}/>
                <p className={style.error}>{errors.password?errors.password:null}</p>

            <button type="submit">Submit</button>
        </form>
        </div>
    );
}