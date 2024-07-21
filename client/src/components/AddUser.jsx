import React, { useState } from "react";

import axios from "axios";
export default function AddUser() {
  const users = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    console.log(user);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/api/create", user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Form</h2>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Names
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onChange={inputHandler}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={inputHandler}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            onChange={inputHandler}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
