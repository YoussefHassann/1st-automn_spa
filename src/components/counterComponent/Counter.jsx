import { useState } from "react";
import './Counter.css'; // Link to the CSS file

function Counter() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <div className="counter-container">
      <div className="content">
        <h1>Counting: {count}</h1>
        <div className="buttons">
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </div>
        <input
          type="text"
          placeholder="Insert your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Your name is <span className="highlight">{username || "..."}</span></p>
      </div>
    </div>
  );
}

export default Counter;
