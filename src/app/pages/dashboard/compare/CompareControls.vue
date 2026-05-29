<template>
  <div :class="[$style.compareControls, classes]">
    <Select
      v-model="modelValue[0]"
      :class="$style.select"
      :options="firstOptions"
      :label="t('page.dashboard.compare.compareThisYear')"
    />
    <Button :class="$style.switch" :icon="RiArrowLeftRightLine" @click="switchYears" />
    <Select
      v-model="modelValue[1]"
      :class="$style.select"
      :options="secondOptions"
      :label="t('page.dashboard.compare.againstThisYear')"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from '@components/base/button/Button.vue';
import Select from '@components/base/select/Select.vue';
import { useDataStore } from '@store/state';
import { RiArrowLeftRightLine } from '@remixicon/vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { ClassNames } from '@utils/types.ts';

const modelValue = defineModel<[number, number]>({ required: true });

const props = defineProps<{
  class?: ClassNames;
}>();

const { t } = useI18n();
const { state } = useDataStore();

const classes = computed(() => props.class);
const availableYears = computed(() =>
  state.years.map((v) => ({
    id: v.year,
    label: v.year.toString(),
    value: v.year
  }))
);

const firstOptions = computed(() => availableYears.value.filter((v) => v.value !== modelValue.value?.[1]));

const secondOptions = computed(() => availableYears.value.filter((v) => v.value !== modelValue.value?.[0]));

const switchYears = () => {
  modelValue.value = [modelValue.value[1], modelValue.value[0]];
};
</script>

<style lang="scss" module>
.compareControls {
  display: flex;
  align-items: flex-end;
  gap: 6px;

  .select {
    min-width: 100px;
  }

  .switch {
    margin-bottom: 4px;
  }
}
</style>
