import axios from "./components/api";
import { useEffect, useState } from "react";
import "./App.css";
import CovidSummary from "./components/CovidSummary";
import LineGraph from "./components/LineGraph";

function App() {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/summary")
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalRecovered(res.data.Global.NewRecovered);
          setTotalDeaths(res.data.Global.TotalDeaths);
        }

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Fetch data from api...!</p>;
  }

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={""}
      />

      <LineGraph />
    </div>
  );
}

export default App;
