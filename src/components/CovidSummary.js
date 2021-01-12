import Card from "./Card";
import NumberFormat from "react-number-format";
import { Box, Typography } from "@material-ui/core";

const CovidSummary = (props) => {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;

  return (
    <Box>
      <Box>
        <Typography
          variant="h4"
          style={{ textTransform: "capitalize", margin: "15px 0" }}
        >
          {country === "" ? "World Wide Corona Report" : country}
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card>
            <Typography variant="h6">Total Confirmed</Typography>
            <br />
            <Typography variant="subtitle2">
              {
                <NumberFormat
                  value={totalConfirmed}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              }
            </Typography>
          </Card>
          <Card>
            <Typography variant="h6">Total Recovered</Typography>
            <br />
            <Typography variant="subtitle2">
              {
                <NumberFormat
                  value={totalRecovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              }
            </Typography>
          </Card>
          <Card>
            <Typography variant="h6">Total Deaths</Typography>
            <br />
            <Typography variant="subtitle2">
              {
                <NumberFormat
                  value={totalDeaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              }
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default CovidSummary;
