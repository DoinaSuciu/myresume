import "./App.scss";
import { LeftSide, RightSide } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api/resume/doina").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <main className="main-app">
      <LeftSide data={data} />

      <RightSide data={data} />
    </main>
  );
}

export default App;
