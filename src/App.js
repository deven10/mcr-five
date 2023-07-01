import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { SingleRecipe } from "./SingleRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
