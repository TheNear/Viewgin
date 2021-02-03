import { GetDonutResponse, GetGraphResponse } from "api/types";

export interface ParsedDonutData {
  options: {
    labels: string[],
  },
  series: number[]
}

export const donutDataParser = (data: GetDonutResponse): ParsedDonutData => {
  return data.list.reduce<ParsedDonutData>((prev, curr) => {
    prev.options.labels.push(curr.title);
    prev.series.push(+curr.views);
    return prev;
  }, {
    options: {
      labels: [],
    },
    series: [],
  });
};

export interface ParsedGraphData {
  id: number,
  name: string,
  data: Array<[string, number]>
}

export const graphDataParser = (data: GetGraphResponse): ParsedGraphData[] => {
  return data.list.map((item) => ({
    id: item.id,
    name: item.title,
    data: item.data,
  }));
};
