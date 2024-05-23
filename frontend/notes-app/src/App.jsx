
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home"
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const routes = (
  <Router>
      <Routes>
        <Route path="/dashboard" exact element={<Home/>}/>
        <Route path="/signin" exact element={<Signin/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
      </Routes>
  </Router>
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
