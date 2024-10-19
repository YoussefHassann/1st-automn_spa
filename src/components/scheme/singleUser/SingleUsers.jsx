import { useEffect, useState } from "react";
import "./SingleUsers.css";
import axios from "axios";
function SingleUsers() {
  const [show, setShow] = useState("");
  async function showUser(id) {
    const { data } = await axios.get(`http://localhost:4000/user/${id}`);
    setShow(data);
  }

  useEffect(() => {
    showUser(id);
  });
  return (
    <>
      <div>
        <p>{show.id}</p>
        <p>{show.name}</p>
        <p>{show.email}</p>
      </div>
    </>
  );
}

export default SingleUsers;
