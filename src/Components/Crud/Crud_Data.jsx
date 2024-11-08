import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



const Crud_Data = () => {

  const [data, setData] = useState([])

  const [user, setUser] = useState(['0']);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (

    <div className="container">
      <h1 style={{ marginTop: '50px', textAlign: "center" }}>List of Users</h1>
      <div className="table-container">
        <div className="d-flex justify-content-end" >
          <Link to="/create" className="btn btn-success">Add +</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
                <td>{d.mobile}</td>
                <td>
                  <button className="btn btn-sm btn-info m-2">Read</button>
                  <button className="btn btn-sm btn-primary m-2">Edit</button>
                  <button className="btn btn-sm btn-danger m-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Crud_Data;