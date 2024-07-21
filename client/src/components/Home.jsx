import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <div>
          <button className="btn btn-success btn-sm">
            <Link to="/add" className="text-white text-decoration-none">
              Add
            </Link>
          </button>
        </div>
        <h2 className="text-center mb-4">User Table</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice Mayer</td>
              <td>alice@example.com</td>
              <td>
                <button className="btn btn-success btn-sm">
                  <Link
                    to="/update"
                    className="text-white text-decoration-none"
                  >
                    Update
                  </Link>
                </button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
