<template>
  <AppHead :title="resource.pluralLabel"></AppHead>

  <div class="dropdown">
    <label tabindex="0" class="btn m-1">Click</label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { usePage } from "@inertiajs/inertia-vue3";
import type { Resource } from "@/Models/Resource";
import { computed, ref } from "vue";

const { props: $props } = usePage<{ controller: { resource: Resource } }>();

const resource = ref(computed(() => $props.value.controller.resource));
</script>
