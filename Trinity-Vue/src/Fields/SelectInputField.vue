<template>
  <BaseFieldComponent :component="props.component" :errors="props.errors">
    <Dropdown
      ref="dd"
      :id="props.component.columnName"
      :name="props.component.columnName"
      :modelValue="form.data()[props.component.columnName]"
      @change="
        (event) => props.setFieldValue(props.component.columnName, event.value)
      "
      :disabled="props.disabled || props.component.disabled"
      :placeholder="props.component.placeholder"
      :class="{ 'p-invalid': errors?.value[props.component.columnName] }"
      :options="options"
      :optionLabel="props.component.optionLabel"
      :optionValue="props.component.optionValue"
      :filter="props.component.searchable"
      :filterPlaceholder="props.component.searchPlaceholder"
      showClear
      @filter="(ev) => filter(ev.value)"
      :filterMatchMode="'contains'"
      :loading="props.loading"
    />
  </BaseFieldComponent>
</template>

<script lang="ts" setup>
import Dropdown from "primevue/dropdown";
import { computed, ref } from "vue";
import BaseFieldComponent from "@/Fields/BaseFieldComponent.vue";
import debounce from "lodash/debounce";
import type SelectFieldProps from "@/Types/Props/SelectFieldProps";

const dd = ref();
const props = defineProps<SelectFieldProps>();
console.log(props);

const options = computed(() => {
  const opts: Array<{ [key: string]: string }> = [];
  for (const key in props.component.options) {
    let i = {} as any;
    i[props.component.optionLabel] = props.component.options[key];
    i[props.component.optionValue] = key;
    opts.push(i);
  }
  return opts;
});

const filter = debounce(async (value: string) => {
  if (
    !options.value.find((el) =>
      el[props.component.optionLabel].includes(value)
    ) &&
    props.search
  ) {
    const res = await props.search(value);
    console.log(res);
  }
}, 300);
</script>

<style scoped></style>
