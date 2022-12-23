<template>
  <div
    class="p-fluid grid px-0 mx-0 col-12"
    :class="[
      props.component.columnSpan > 0 && props.component.columnSpan < 12
        ? `md:col-${props.component.columnSpan}`
        : '',
    ]"
  >
    <template
      v-for="(innerComponent, index) of props.component.schema"
      :key="`gird_${index}_${innerComponent.componentName}`"
    >
      <component
        :is="innerComponent.componentName"
        :component="innerComponent"
        :containerClass="
          props.component.columns
            ? `md:col-${12 / props.component.columns}`
            : ''
        "
        :form="form"
        :errors="errors"
        :setFieldValue="setFieldValue"
      ></component>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type BaseLayout from "@/Types/Models/BaseLayout";
import type LayoutProps from "@/Types/Props/LayoutProps";
import type BaseField from "@/Types/Models/BaseField";

const props = defineProps<LayoutProps<BaseField | BaseLayout>>();
</script>

<style scoped></style>
