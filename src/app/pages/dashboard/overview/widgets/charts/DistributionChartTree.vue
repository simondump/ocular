<template>
  <TreeMapChart ref="chart" :data="data" />
</template>

<script lang="ts" setup>
import TreeMapChart from '@components/charts/tree-map-chart/TreeMapChart.vue';
import { useNumberFormatter } from '@composables/number-formatter/useNumberFormatter.ts';
import { useSettingsStore } from '@store/settings';
import { useDataStore } from '@store/state';
import { sumOfBudgetGroups, sumOfBudgets } from '@store/state/utils/budgets.ts';
import { sum } from '@utils/array/array.ts';
import { uuid } from '@utils/uuid/uuid.ts';
import { computed, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';
import type { TreeMapChartConfig, TreeMapChartNode } from '@components/charts/tree-map-chart/TreeMapChart.types.ts';

const props = defineProps<{
  highlight?: 'income' | 'expenses';
  averages?: boolean;
  percentages?: boolean;
  totalIncome: number;
  totalExpenses: number;
}>();

const { state: settings } = useSettingsStore();
const { state } = useDataStore();
const { t } = useI18n();
const { n } = useNumberFormatter();

const chart = useTemplateRef('chart');

const budgetGroupToNode = (type: 'income' | 'expenses'): TreeMapChartNode => {
  const groups = [...state[type]];
  const total = sumOfBudgetGroups(groups) + (settings.general.carryOver ? (state.overallBalance ?? 0) : 0);
  const endingBalance = state.overallBalance ?? 0;

  const baseColor = type === 'income' ? 'var(--c-success)' : 'var(--c-warning)';
  const baseTransparency =
    (type === 'income' && props.highlight === 'expenses') || (type === 'expenses' && props.highlight === 'income')
      ? 50
      : 100;

  const color = (transparency: number) =>
    `color-mix(in srgb, ${baseColor} ${Math.max(transparency * baseTransparency, 5)}%, transparent)`;

  const label = (total: number, value: number) =>
    props.percentages ? n(value / total, { key: 'percent' }) : props.averages ? n(value / 12) : n(value);

  const data: TreeMapChartNode = {
    name: type,
    id: uuid(),
    value: total,
    children: groups.map((group) => ({
      id: uuid(),
      name: group.name,
      value: sumOfBudgets(group.budgets),
      children: group.budgets.map((budget) => {
        const budgetTotal = sum(budget.values);

        return {
          id: uuid(),
          name: budget.name,
          value: budgetTotal,
          label: `${budget.name} (${label(total, budgetTotal)})`,
          color: color(budgetTotal / total)
        };
      })
    }))
  };

  if (settings.general.carryOver) {
    if (type === 'income' && endingBalance > 0) {
      data.value += endingBalance;
      data.children!.push({
        id: uuid(),
        value: endingBalance,
        name: t('page.dashboard.overview.surplus'),
        color: color(endingBalance / total),
        label: `${t('page.dashboard.overview.surplus')} (${label(data.value, endingBalance)})`
      });
    } else if (type === 'expenses' && endingBalance < 0) {
      data.value += endingBalance;
      data.children!.push({
        id: uuid(),
        value: endingBalance,
        name: t('page.dashboard.overview.deficit'),
        color: color(endingBalance / total),
        label: `${t('page.dashboard.overview.deficit')} (${label(data.value, endingBalance)})`
      });
    }
  }

  return data;
};

const data = computed(
  (): TreeMapChartConfig => ({
    nodes: [budgetGroupToNode('income'), budgetGroupToNode('expenses')]
  })
);

defineExpose({
  download: (name: string, type: 'png' | 'svg') => chart.value?.download(name, type)
});
</script>
