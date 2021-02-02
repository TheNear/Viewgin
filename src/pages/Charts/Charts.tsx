import { ChartDonut } from "@components/ChartsView/ChartDonut";
import { ChartGraph } from "@components/ChartsView/ChartGraph";
import { Tabs } from "antd";
import React from "react";
import { ChartsWrapper } from "./ChartsStyle";

const Charts: React.FC = () => {
  return (
    <ChartsWrapper>
      <Tabs size="large" style={{ height: "100%" }}>
        <Tabs.TabPane tab="Line Chart" key="1">
          <ChartGraph />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Donut Chart" key="2">
          <ChartDonut />
        </Tabs.TabPane>
      </Tabs>
    </ChartsWrapper>
  );
};

export { Charts };
