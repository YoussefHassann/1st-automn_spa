import axios from "axios";
import { useState } from "react";
import './Store.css'
function Store() {
  const [UserName, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [ID, setID] = useState(0);

  async function storeuser(userdata) {
    try {
      const { status } = await axios.post("http://localhost:4000/user", userdata);

      if (status === 201) {
        alert("User saved successfully!");
        console.log("User saved:", userdata);
        setID((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error saving user:", error);
    }
  }

  return (
    <div className="main">
      <div className="content">
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() =>
            storeuser({
              id: ID,
              name: UserName,
              email: Email,
            })
          }
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Store;
