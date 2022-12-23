<template>
  <Fieldset
    class="col-12"
    :class="`md:col-${props.component.columnSpan}`"
    :legend="props.component.label"
    :toggleable="props.component.toggleable"
    :collapsed="props.component.isToggledHiddenByDefault"
  >
    <div class="p-fluid formgrid grid px-0 mx-0 col-12">
      <template
        v-for="(innerComponent, index) of props.component.schema"
        :key="`fieldset_${index}_${innerComponent.componentName}`"
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
        />
      </template>
    </div>
  </Fieldset>
</template>

<script lang="ts" setup>
import Fieldset from "primevue/fieldset";

import type BaseLayout from "@/Types/Models/BaseLayout";
import type LayoutProps from "@/Types/Props/LayoutProps";
import type BaseField from "@/Types/Models/BaseField";

const props = defineProps<LayoutProps<BaseField | BaseLayout>>();
</script>

<style scoped></style>
