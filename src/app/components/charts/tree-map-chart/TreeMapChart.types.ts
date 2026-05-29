export type TreeMapChartNode = {
  id?: string;
  name: string;
  value: number;
  color?: string;
  children?: TreeMapChartNode[];
};

export type TreeMapChartConfig = {
  nodes: TreeMapChartNode[];
  formatter: (v: number) => string;
  tooltip: (id: string) => string | undefined;
};
