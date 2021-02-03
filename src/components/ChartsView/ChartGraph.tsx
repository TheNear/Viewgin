import { Spin } from "antd";
import { Api } from "api/service";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { graphDataParser, ParsedGraphData } from "./chartDataParsers";

const options = {
  xaxis: {
    type: "datetime",
  },
  stroke: {
    curve: "smooth",
  },
};

const ChartGraph: React.FC = () => {
  const [graphData, setGraphData] = useState<null | ParsedGraphData[]>(null);

  const getGraphData = async () => {
    const data = await Api.getGraphData();
    const parsedData = graphDataParser(data);
    setGraphData(parsedData);
  };

  useEffect(() => {
    getGraphData();
  }, []);

  if (!graphData) {
    return <Spin tip="Loading..." />;
  }

  return <Chart height="100%" type="line" options={options} series={graphData} />;
};

export { ChartGraph };
