<template>
  <div class="field col-12 md:col" :class="containerClass">
    <label :for="component.columnName">{{ component.label }}</label>
    <div
      :class="{
        'p-inputgroup':
          component.prefixes ||
          component.suffixes ||
          component.prefixIcons ||
          component.suffixIcons,
      }"
    >
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of component.prefixIcons"
        :key="`${index}_${p}`"
      >
        <i :class="p"></i>
      </span>
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of component.prefixes"
        :key="`${index}_${p}`"
      >
        {{ p }}
      </span>

      <component
        :is="is"
        v-bind="attrs"
        :id="component.columnName"
        :name="component.columnName"
        :modelValue="form.data()[component.columnName]"
        @update:modelValue="
          (value) => setFieldValue(component.columnName, value)
        "
        v-tooltip.top.focus="component.toolTip"
        :disabled="component.disabled"
        :placeholder="component.placeholder"
        type="text"
        :class="{ 'p-invalid': errors?.value[component.columnName] }"
        :form="form"
        :errors="errors"
      />

      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of component.suffixIcons"
        :key="`${index}_${p}`"
      >
        <i :class="p"></i>
      </span>
      <span
        class="p-inputgroup-addon"
        v-for="(p, index) of component.suffixes"
        :key="`${index}_${p}`"
      >
        {{ p }}
      </span>
    </div>
    <small :id="`${component.columnName}-help`">
      {{ component.helperText }}
    </small>
    <div
      :id="`${component.columnName}-error`"
      class="p-error mt-1"
      v-if="errors?.value[component.columnName]"
    >
      <div
        v-for="(err, index) of errors?.value[component.columnName]"
        :key="index"
      >
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component as VueComponent } from "vue";
import type Field from "@/Types/Field";
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";

defineProps<{
  component: Field;
  is: string | VueComponent | object;
  containerClass?: string;
  attrs?: object;
  form: InertiaFormProps<any>;
  errors: Errors;
  setFieldValue: (attr: string, value: any) => void;
}>();
</script>

<style scoped></style>
