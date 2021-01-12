import axios from "./components/api";
import { useEffect } from "react";
import "./App.css";
import CovidSummary from "./components/CovidSummary";
import LineGraph from "./components/LineGraph";

function App() {
  useEffect(() => {
    axios
      .get("/summary")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={0}
        totalRecovered={0}
        totalDeaths={0}
        country={"Pakistan"}
      />
      <LineGraph />
    </div>
  );
}

export default App;
