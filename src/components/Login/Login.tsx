import React, {  useContext, useEffect, ChangeEvent } from "react"
import useForm from "../../hooks/useForm"
import classes from "./Login.module.scss"
import { useNavigate } from "react-router-dom"
import ContextProvider from "../../context/ContextProvider"


const Login = () => {
  const navigate = useNavigate()
  const [form, handleInputs] = useForm()
  const { handleLogged, setState }: any = useContext(ContextProvider)

  const handleLogin = () => {
    if (form.username === "uSer123" && form.password === "Q1w2e3r4") {
      handleLogged({ success: true })
      navigate("/employees")
      localStorage.setItem("USER", JSON.stringify(form))
      setState(form.username)
    }
  }
  
  useEffect(()=>{
        const inputUser:any = document.getElementById('inputUser');
        inputUser.onpaste =( e:ChangeEvent<HTMLInputElement>) => e.preventDefault();
        const inputPassword:any = document.getElementById('inputPassword');
        inputPassword.onpaste =( e:ChangeEvent<HTMLInputElement>) => e.preventDefault();
})
  return (
    <div className={classes.loginPage}>
      <h2>Login</h2>
      <div className={classes.loginForm}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputs}
          id='inputUser'
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputs}
          id='inputPassword'
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  )
}

export default Login
