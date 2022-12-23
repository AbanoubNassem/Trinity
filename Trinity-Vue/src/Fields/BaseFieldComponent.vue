<template>
  <div
    class="field col-12 md:col"
    :class="[
      component.columnSpan > 0 && component.columnSpan < 12
        ? `md:col-${component.columnSpan}`
        : '',
    ]"
  >
    <label :for="props.component.columnName">{{ props.component.label }}</label>
    <div
      :class="{
        'p-inputgroup':
          props.component.prefixes ||
          props.component.suffixes ||
          props.component.prefixIcons ||
          props.component.suffixIcons,
      }"
    >
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of props.component.prefixIcons"
        :key="`${index}_${p}`"
      >
        <i :class="p"></i>
      </span>
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of props.component.prefixes"
        :key="`${index}_${p}`"
      >
        {{ p }}
      </span>

      <slot></slot>
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of props.component.suffixIcons"
        :key="`${index}_${p}`"
      >
        <i :class="p"></i>
      </span>
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of props.component.suffixes"
        :key="`${index}_${p}`"
      >
        {{ p }}
      </span>
    </div>
    <small :id="`${props.component.columnName}-help`">
      {{ props.component.helperText }}
    </small>
    <div
      :id="`${props.component.columnName}-error`"
      class="p-error mt-1"
      v-if="errors?.value[props.component.columnName]"
    >
      <div
        v-for="(err, index) of errors?.value[props.component.columnName]"
        :key="index"
      >
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Errors from "@/Types/Models/errors";
import type BaseField from "@/Types/Models/BaseField";

const props = defineProps<{
  component: BaseField;
  errors: Errors;
}>();
</script>

<style scoped></style>
