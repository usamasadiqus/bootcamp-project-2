import Card from "./Card";

const CovidSummary = () => {
  return (
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
  );
};

export default CovidSummary;
