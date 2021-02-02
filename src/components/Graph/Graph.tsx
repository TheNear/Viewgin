import { Api } from "api/service";
import { GetGraphResponse } from "api/types";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { GraphWrapper } from "./GraphStyle";
import { data } from "./mocs";

const options = {
  xaxis: {
    type: "datetime",
  },
  stroke: {
    curve: "smooth",
  },
};

const Graph: React.FC = () => {
  const [graphData, setGraphData] = useState<null | GetGraphResponse>(null);

  useEffect(() => {
    Api.getGraphData().then((data) => setGraphData(data));
  }, []);

  useEffect(() => {
    console.log(graphData);
  }, [graphData]);

  if (!graphData) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <GraphWrapper>
      <Chart type="line" options={options} series={graphData.list} />
    </GraphWrapper>
  );
};

export { Graph };
