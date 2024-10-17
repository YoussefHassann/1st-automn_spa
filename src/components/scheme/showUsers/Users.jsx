import axios from "axios"; 
import { useEffect, useState } from "react"; 
import './Users.css'

function Users() {
  const [users, setUsers] = useState([]); 
  const [show, setShow] = useState(""); 
  const [username, setUsername] = useState(""); 
  // const [email, setEmail] = useState(""); // (Optional) Store email for editing

  // Fetch all users from the API
  async function getAllUsers() {
    const { data } = await axios.get("http://localhost:4000/user");
    setUsers(data);
  }

  // Fetch details of a single user by ID
  async function showUser(id) {
    const { data } = await axios.get(`http://localhost:4000/user/${id}`);
    setShow(data);
    console.log(data); 
  }

  // Delete a user by ID
  async function deleteUser(id) {
    console.log(id); 
    await axios.delete(`http://localhost:4000/user/${id}`);
  }

  // Fetch user data for editing
  async function editUser(id) {
    console.log(id); 
    const { data } = await axios.get(`http://localhost:4000/user/${id}`);
    console.log(data); 
    setUsername(data.name); 
  }

  // Update user data in the API
  async function saveUser(data) {
    console.log(data);
    await axios.put(`http://localhost:4000/user/${data.id}`, data);
    console.log("User updated:", data);
  }

  
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
    <div className="main">
      <h1>User List</h1>

      <div>
        {users.map((user, index) => (
          <div key={index} className="user-card">
       
            <h1 onClick={() => showUser(user.id)}>{user.name}</h1>

           
            <input
              value={username}
              type="text"
              placeholder="Edit your data"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />

         
            <br />

            <button onClick={() => editUser(user.id)}>Edit</button>
            <br />

         
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <br />

        
            <button
              onClick={() =>
                saveUser({
                  id: user.id,
                  name: username,
                  email: user.email, 
                })
              }
            >
              Update
            </button>
          </div>
        ))}
      </div>

    
      <div className="user-details">
        <p>{show.name}</p>
        <p>{show.email}</p>
      </div>
      </div>
    </>
  );
}

export default Users;
