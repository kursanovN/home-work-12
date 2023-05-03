import "./App.css";
import { Header } from "./components/header/Header";
import { MealSummaty } from "./components/meal-summary/MealSummary";
import { Meals } from "./components/meals/Meals";

function App() {
  return (
    <div className="App">
      <Header />
      <MealSummaty />
      <Meals />
    </div>
  );
}

export default App;
