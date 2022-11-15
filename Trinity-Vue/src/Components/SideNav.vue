<template>
  <div class="drawer-side">
    <label for="side-drawer" class="drawer-overlay"></label>
    <aside class="menu p-4 w-80 bg-base-200 text-base-content">
      <ul class="menu menu-compact flex flex-col p-0 px-4">
        <li class="menu-title"><span>Dashboard</span></li>
        <li>
          <AppLink
            href="/"
            preserve-state
            preserve-scroll
            :class="{ active: $page.component === 'Home' }"
            >Dashboard
          </AppLink>
        </li>
        <li />
      </ul>

      <ul
        class="menu menu-compact flex flex-col p-0 px-4"
        v-for="resource of configStore.resources"
        :key="resource.label"
      >
        <!--        <li></li>-->
        <!--        <li class="menu-title"><span>Mockup</span></li>-->
        <li>
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
        </li>
      </ul>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/Stores/ConfigStore";

const configStore = useConfigStore();
</script>
