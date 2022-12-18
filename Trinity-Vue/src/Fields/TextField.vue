<template>
  <div class="field col-12 md:col" :class="extraClasses">
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
        :is="component.inputMask == null ? 'InputText' : 'InputMask'"
        :id="component.columnName"
        :name="component.columnName"
        v-tooltip.top.focus="component.toolTip"
        :disabled="component.disabled"
        :mask="component.inputMask"
        :slotChar="component.slotChar ?? '_'"
        :placeholder="component.placeholder"
        type="text"
        class=""
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
  </div>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";

defineProps<{ component: Field; extraClasses?: string }>();
</script>

<style scoped></style>
