import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
  const users = { name: "", email: "", password: "" };

  const { id } = useParams();
  const [user, setUser] = useState(users);

  const navigate = useNavigate();

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3001/api/getone/${id}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((error) => {
          console.log("We got an error");
        });
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = await axios.put(
        `http://localhost:3001/api/update/${id}`,
        user
      );

      setUser(users);

      navigate("/");
    } catch (error) {
      console.log("We found an error while updating");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={inputHandle}
            placeholder="Enter your name"
            value={user.name}
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
            name="email"
            placeholder="Enter your email"
            onChange={inputHandle}
            value={user.email}
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
            name="password"
            placeholder="Enter your new password"
            onChange={inputHandle}
            value={user.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
