import React, { useEffect } from "react";
import "./Registration.css";
import Landing from "../landingpage/Landing";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/authApi";

function Registration() {
  const navigate = useNavigate();
  const [register, { data }] = useRegisterMutation();

  useEffect(() => {
    if (data) {
      alert("Sign up successful");
      navigate("/login");
    }
  }, [data, navigate]);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      register(values)
        .unwrap()
        .catch(() => alert("Username is taken."));
    },
  });
  return (
    <div className="registration-layout">
      <div>
        <Landing />
      </div>
      <div className="registration-container">
        <form onSubmit={formik.handleSubmit}>
          <input
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Name"
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <input
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username ? (
            <p>{formik.errors.username}</p>
          ) : null}
          <input
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          <button type="submit" className="signup">
            Sign Up
          </button>
        </form>
        <button onClick={() => navigate("/login")} className="login">
          Log into Account
        </button>
      </div>
    </div>
  );
}

export default Registration;
