import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/AllFeature/Feature";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Feature />
    </>
  );
}

export default App;
