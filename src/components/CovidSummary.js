import Card from "./Card";

const CovidSummary = (props) => {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;

  return (
    <div>
      <div>
        <h1>{country === "" ? "World Wide Corona Report" : country}</h1>
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
  );
};

export default CovidSummary;
