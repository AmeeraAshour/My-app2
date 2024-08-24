import React, { useEffect, useState } from 'react'

export default function Comments() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/1/comments`
        );
        const result = await response.json();
        setData(result);
      };
      fetchData();
    }, []);
  return (
    <div>
      <h1>Comments</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.body}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
