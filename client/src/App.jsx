import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import AddUser from "./components/AddUser.jsx";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
