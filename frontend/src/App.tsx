import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((resp) => setMessage(resp.data.message))
      .catch((err) => console.error("Error fetching", err));
  }, []);

  return <div className="h-full">{message}</div>;
}

export default App;
