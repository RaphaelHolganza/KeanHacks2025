import { useState } from "react";
import MapComponent from "./MapComponent";
import CategoryButtons from "./CategoryButtons";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* Banner */}
      <header className="w-full bg-[#9CBA7F] text-white text-2xl font-bold py-4 text-center">
        Urban Wellness Locator
      </header>
      <MapComponent />
      <div className="mt-5">
        <CategoryButtons />
      </div>
    </>
  );
}

export default App;
