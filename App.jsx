import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./functional/Functional";
import Class from "./class/Class";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Functional />
      <Class />
    </>
  );
}

export default App;
