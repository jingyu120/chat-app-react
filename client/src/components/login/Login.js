import React from "react";
import Landing from "../landingpage/Landing";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:3001/api/auth/login", values).then((res) => {
        if (res.data) {
          navigate("/registration");
        } else {
          alert("Invalid Username/Password.");
        }
      });
    },
  });
  return (
    <div className="login-layout">
      <div>
        <Landing />
      </div>
      <div className="login-container">
        <form onSubmit={formik.handleSubmit}>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            name="username"
            placeholder="User Name"
          />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="login">
            Log In
          </button>
        </form>
        <Link to={"/registration"}>Forgot Password?</Link>
        <button className="create-account">Create a New Account</button>
      </div>
    </div>
  );
}

export default Login;
