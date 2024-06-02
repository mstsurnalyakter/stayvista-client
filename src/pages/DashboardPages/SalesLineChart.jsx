import { Chart } from "react-google-charts";
import PropTypes from "prop-types";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";


const options = {
  title: "Sales Over Time",
  curveType: "function",
  legend: { position: "bottom" },
  series: [{ color: "#F43F5E" }],
};
const SalesLineChart = ({ data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data?.length > 1?  <Chart
          chartType="LineChart"
          width="100%"
          data={data}
          options={options}
        />
        :
        <>
        <LoadingSpinner/>
        <p className="text-center">Not enough data available for this section.</p>
        </>
      )}
    </>
  );
};

SalesLineChart.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default SalesLineChart;
