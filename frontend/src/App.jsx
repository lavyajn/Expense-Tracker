import React from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


const Navigation = () => (
  <nav>
    <Link to ="/login">Login</Link>
    <Link to ="/signup">Signup</Link>
  </nav>
);

function App() {
   
  return(
    <Router>
      <div>
        <Navigation/>
        <Routes>
        <Route path = "/login" element={<LoginPage/>} />
        <Route path = "/signup" element={<SignupPage/>} />
        <Route path = "/" element={<SignupPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;