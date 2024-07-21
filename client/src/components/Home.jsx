import React from "react";

export default function Home() {
  return (
    <div className="container mt-5">
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
              <button className="btn btn-info btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Kate Moss</td>
            <td>kate@example.com</td>
            <td>
              <button className="btn btn-info btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/* Sample Row 3 */}
          <tr>
            <td>Danny McChain</td>
            <td>danny@example.com</td>
            <td>
              <button className="btn btn-info btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/* Sample Row 4 */}
          <tr>
            <td>Alexa Chung</td>
            <td>alexa@example.com</td>
            <td>
              <button className="btn btn-info btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/* Sample Row 5 */}
          <tr>
            <td>Ben Smith</td>
            <td>ben@example.com</td>
            <td>
              <button className="btn btn-info btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
