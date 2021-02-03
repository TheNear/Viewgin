import { Spin } from "antd";
import { Api } from "api/service";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { donutDataParser, ParsedDonutData } from "./chartDataParsers";

const ChartDonut: React.FC = () => {
  const [donutData, setDonutData] = useState<null | ParsedDonutData>(null);

  const getDonutData = async () => {
    const data = await Api.getDonutData();
    const parsedData = donutDataParser(data);
    setDonutData(parsedData);
  };

  useEffect(() => {
    getDonutData();
  }, []);

  if (!donutData) {
    return <Spin tip="Loading..." />;
  }

  return <Chart height="100%" type="donut" options={donutData.options} series={donutData.series} />;
};

export { ChartDonut };
