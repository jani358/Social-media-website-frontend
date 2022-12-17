import React, { useEffect, useState } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { useAlert } from "react-alert";





function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);
  const loginHadler = (e) => {
    e.preventDefault()

    dispatch(loginUser(email, password));
  };


  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className='login'>
    <form className='loginForm' onSubmit={loginHadler}>
        <Typography style={{ padding: "3vmax", color: "RED" }} variant='h3'>PETS WORLD</Typography>

        <input one
            type="email"
            name=""
            id=""
            placeholder='Enter Your Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            name=""
            id=""
            placeholder='Enter Your Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/forgot/password">
            <Typography>Forgot Password</Typography>
        </Link>

        <Button type='submit' style={{ color: "white", fontSize: "30px" }}>Login</Button>

        <Link to="/register">
            <Typography>New User?</Typography>
        </Link>
    </form>
</div>
  );
};

export default Login;
