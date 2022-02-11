import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
