import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

  const [users, setUser] = useState([]);
  useEffect(() => {
    loader();
  }, []);
  const loader = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result, "asd");
    setUser(result.data);
  }

  const deletUser = async id => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loader();
  }


  return (
    <div>
      <h1>Home</h1>
      <table className="table table-striped">
        <thead>
          <tr className='bg-dark text-white '>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope='row' >{index + 1}</th>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>
                <Button onClick={() => { deletUser(user.id) }} className='m-1' variant='danger '>Delete</Button>
                {/* <Button  className='m-1' variant='primary '>view</Button> */}
                <Link className='btn btn-warning' to={`/edit/${user.id}`}>Edit</Link>

              </th>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home
