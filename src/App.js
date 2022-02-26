import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
        {console.log(process.env.REACT_APP_BASEURL)}
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
