import "./App.css";
import CovidSummary from "./components/CovidSummary";
import LineGraph from "./components/LineGraph";

function App() {
  return (
    <div className="App">
      <CovidSummary />
      <LineGraph />
    </div>
  );
}

export default App;
