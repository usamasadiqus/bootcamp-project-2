import "./App.css";
import Card from "./components/Card";
import LineGraph from "./components/LineGraph";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1>World wide corona report</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card>
              <span>Total Confirmed</span>
              <br />
              <span>0</span>
            </Card>
            <Card>
              <span>Total Recovered</span>
              <br />
              <span>0</span>
            </Card>
            <Card>
              <span>Total Deaths</span>
              <br />
              <span>0</span>
            </Card>
          </div>
        </div>
      </div>
      <LineGraph />
    </div>
  );
}

export default App;
