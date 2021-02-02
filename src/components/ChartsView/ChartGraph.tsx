import { Spin } from "antd";
import { Api } from "api/service";
import { GetGraphResponse } from "api/types";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const options = {
  xaxis: {
    type: "datetime",
  },
  stroke: {
    curve: "smooth",
  },
};

const ChartGraph: React.FC = () => {
  const [graphData, setGraphData] = useState<null | GetGraphResponse>(null);

  const getGraphData = async () => {
    const data = await Api.getGraphData();
    setGraphData(data);
  };

  useEffect(() => {
    getGraphData();
  }, []);

  if (!graphData) {
    return <Spin tip="Loading..." />;
  }

  return <Chart type="line" options={options} series={graphData.list} />;
};

export { ChartGraph };
