import React, { useEffect } from "react";
import Landing from "../landingpage/Landing";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../features/authApi";
import { useDispatch } from "react-redux";
import { saveLogin } from "../../features/userReducer";

function Login() {
  const navigate = useNavigate();
  const [login, { data }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(saveLogin(data));
      // dispatch(setSocket(io.connect(`${process.env.REACT_APP_BASEURL}`)));
      navigate("/");
    }
  }, [data, dispatch, navigate]);

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
      login(values);
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
