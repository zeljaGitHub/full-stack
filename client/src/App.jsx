import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        setBackendData(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {backendData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => <p key={i}>{user}</p>)
      )}
    </>
  );
}

export default App;
