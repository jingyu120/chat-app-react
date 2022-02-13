import React, { useContext } from "react";
import Landing from "../landingpage/Landing";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import UserContext from "../../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:3001/api/auth/login", values).then((res) => {
        if (res.data) {
          setUser(res.data);
          localStorage.setItem("userData", JSON.stringify(res.data));
          navigate("/");
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
          {formik.touched.username && formik.errors.username ? (
            <p>{formik.errors.username}</p>
          ) : null}
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          <button type="submit" className="login">
            Log In
          </button>
        </form>
        <Link to={"/registration"}>Forgot Password?</Link>
        <button
          onClick={() => navigate("/registration")}
          className="create-account"
        >
          Create a New Account
        </button>
      </div>
    </div>
  );
}

export default Login;
