<template>
  <AppHead :title="resource.pluralLabel"></AppHead>

  <AppLink
      :href="`/${resource.pluralLabel.toLowerCase()}`"
      :class="{
              active:
                $page.props.controller?.resource?.pluralLabel.toLowerCase() ===
                resource.pluralLabel.toLowerCase(),
            }"
      preserve-state
      preserve-scroll
  >
    {{ resource.pluralLabel }}
  </AppLink>

  <div class="dropdown">
    <label tabindex="0" class="btn m-1">Click</label>
    <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li v-for="item in paginator.data">
        <a>{{item}}</a>
      </li>

    </ul>
  </div>
</template>

<script lang="ts" setup>
import {usePage} from "@inertiajs/inertia-vue3";
import type {Resource} from "@/Models/Resource";
import {computed, ref} from "vue";
import type IPaginator from "@/Models/Paginator";

const {props: $props} = usePage<{ controller: { resource: Resource, data: IPaginator } }>();

const resource = ref(computed(() => $props.value.controller.resource));
const paginator = ref(computed(() => $props.value.controller.data));

console.log(paginator.value);
</script>
