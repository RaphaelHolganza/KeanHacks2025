import { useState } from "react" ;
import MapComponent from "./MapComponent";
import CategoryButtons from "./CategoryButtons";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-500 flex flex-col items-center">
      {/* Banner */}
      <header className="w-full bg-green-700 text-white text-3xl font-bold py-5 text-center shadow-lg">
        🌿 Urban Wellness Locator
      </header>


      {/* Card-Like Map Section */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mt-6 w-[90%] max-w-4xl">
        <MapComponent />
      </div>


      {/* Category Buttons Section */}
      <div className="mt-6">
        <CategoryButtons />
      </div>


      {/* Footer with Nature Aesthetic */}
      <footer className="w-full text-white text-lg py-3 mt-auto bg-green-800 text-center">
        🌱 Explore, Relax, and Rejuvenate 🌍
      </footer>
    </div>
  );
}


export default App;