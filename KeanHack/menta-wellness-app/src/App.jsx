import { useState } from "react";
import MapComponent from "./MapComponent";
import CategoryButtons from "./CategoryButtons";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MapComponent />
      <div className="mt-5">
        <CategoryButtons />
      </div>
    </>
  );
}

export default App;
