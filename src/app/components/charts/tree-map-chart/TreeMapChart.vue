<template>
  <EChart :class="classes" :options="options" />
</template>

<script lang="ts" setup>
import EChart from '@components/charts/echart/EChart.vue';
import { TreemapChart } from 'echarts/charts';
import { TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { computed } from 'vue';
import type { TreeMapChartConfig, TreeMapChartNode } from './TreeMapChart.types.ts';
import type { ClassNames } from '@utils/types.ts';
import type { TreemapSeriesOption } from 'echarts/charts';
import type { TooltipOption } from 'echarts/types/dist/shared';

echarts.use([TooltipComponent, TreemapChart, SVGRenderer]);

type TransformedNode = {
  name: string;
  value: number;
  itemStyle: { color?: string };
  children?: TransformedNode[];
};

const props = defineProps<{
  class?: ClassNames;
  data: TreeMapChartConfig;
}>();

const classes = computed(() => props.class);

type EChartsOption = echarts.ComposeOption<TooltipOption | TreemapSeriesOption>;

const transformNode = ({ color, children, ...rest }: TreeMapChartNode): TransformedNode => ({
  ...rest,
  itemStyle: { color },
  children: children?.map(transformNode)
});

const options = computed(
  (): EChartsOption => ({
    tooltip: {
      show: true,
      transitionDuration: 0,
      renderMode: 'html',
      borderWidth: 0,
      backgroundColor: 'var(--chart-tooltip-background-color)',
      textStyle: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fontWeight: 'var(--font-weight-l)' as any,
        fontFamily: 'var(--font-family)',
        fontSize: 12,
        color: 'var(--chart-tooltip-color)'
      },
      borderRadius: 4,
      shadowColor: 'transparent',
      formatter: (values) => {
        const id = (values as { data: { id: string | undefined } }).data.id;
        return id ? (props.data.tooltip(id) ?? '') : '';
      }
    },
    series: [
      {
        type: 'treemap',
        roam: false,
        animation: false,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        nodeClick: false,
        itemStyle: {
          gapWidth: 2,
          borderRadius: 2,
          borderWidth: 0,
          borderColor: 'transparent'
        },
        levels: [
          {
            itemStyle: {
              gapWidth: 4
            }
          }
        ],
        label: {
          formatter: ({ name, value }) => `${name} (${props.data.formatter(Number(value))})`,
          textBorderWidth: 0,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fontWeight: 'var(--font-weight-l)' as any,
          fontFamily: 'var(--font-family)',
          color: 'var(--chart-label)'
        },
        emphasis: {
          disabled: true
        },
        breadcrumb: {
          show: false
        },
        data: props.data.nodes.map(transformNode)
      }
    ]
  })
);
</script>
