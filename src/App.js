import { axios, Navbar, Chart, CovidSummary } from "./components";
import { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import "./App.css";

function App() {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState("");
  const [coronaCountAr, setCoronaCountAr] = useState([]);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/summary")
      .then((res) => {
        setLoading(false);

        const { TotalConfirmed, TotalRecovered, TotalDeaths } = res.data.Global;
        const { data } = res;

        if (res.status === 200) {
          setTotalConfirmed(TotalConfirmed);
          setTotalRecovered(TotalRecovered);
          setTotalDeaths(TotalDeaths);
          setCovidSummary(data);
        }

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();

    return `${year}-${month}-${_date}`;
  };

  const changeHandler = (e) => {
    setCountry(e.target.value);

    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - days));

    // console.log(from, to);

    getCoronaReportByDateRange(e.target.value, from, to);
  };

  const daysHandler = (e) => {
    setDays(e.target.value);

    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - e.target.value));

    getCoronaReportByDateRange(country, from, to);
  };

  const getCoronaReportByDateRange = (countrySlug, from, to) => {
    axios
      .get(
        `/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
      )
      .then((res) => {
        console.log(res);

        const yAxisCoronaCount = res.data.map((d) => d.Cases);
        const xAxisLabel = res.data.map((d) => d.Date);
        const covidDetails = covidSummary.Countries.find(
          (country) => country.Slug === countrySlug
        );
        setCoronaCountAr(yAxisCoronaCount);
        setTotalConfirmed(covidDetails.TotalConfirmed);
        setTotalRecovered(covidDetails.TotalRecovered);
        setTotalDeaths(covidDetails.TotalDeaths);
        setLabel(xAxisLabel);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <Typography variant="body1">Fetch data from api...!</Typography>;
  }

  return (
    <Box className="App">
      <Navbar />

      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={country}
      />

      <Box>
        <select
          value={country}
          onChange={changeHandler}
          style={{ margin: "20px 0 0", width: 400, height: 40 }}
        >
          <select value="global">Select Country</select>
          {covidSummary.Countries &&
            covidSummary.Countries.map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Country}
              </option>
            ))}
        </select>
        <select
          value={days}
          onChange={daysHandler}
          style={{ width: 100, height: 40 }}
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </Box>

      <Chart yAxis={coronaCountAr} label={label} />
    </Box>
  );
}

export default App;
