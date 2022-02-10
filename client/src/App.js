import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
