import { Spin } from "antd";
import { Api } from "api/service";
import { GetDonutResponse } from "api/types";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "donut",
  },
};

const ChartDonut: React.FC = () => {
  const [donutData, setDonutData] = useState<null | GetDonutResponse>(null);

  const getDonutData = async () => {
    const data = await Api.getDonutData();
    setDonutData(data);
  };

  useEffect(() => {
    getDonutData();
  }, []);

  if (!donutData) {
    return <Spin tip="Loading..." />;
  }

  return <Chart height="100%" type="donut" options={options} series={[32, 123, 123, 23]} />;
};

export { ChartDonut };
