import React, { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
  <div>
    <h1>Users</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td> 
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  )
}
