import React, { useState, useContext, useEffect, ChangeEvent } from "react"
import classes from "./Login.module.scss"
import { useNavigate } from "react-router-dom"
import ContextProvider from "../../context/ContextProvider"

interface IUserLogin {
  username: string
  password: string
}


const DefaultUserState: IUserLogin = {
  username: "",
  password: ""
}

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUserLogin>(DefaultUserState)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const { handleLogged, setState }: any = useContext(ContextProvider)

  const handleLogin = () => {
    if (user.username === "uSer123" && user.password === "Q1w2e3r4") {
      handleLogged({ success: true })
      navigate("/employees")
      localStorage.setItem("USER", JSON.stringify(user))
      setState(user.username)
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
          onChange={handleChange}
          id='inputUser'
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          id='inputPassword'
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  )
}

export default Login
