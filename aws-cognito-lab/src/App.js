import { Amplify } from "aws-amplify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import awsconfig from "./aws-config";
import "./App.css";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Home from "./screens/Home";

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
