<template>
  <div class="layout-footer">
    <img alt="Logo" :src="logo" height="20" class="mr-2" />
    by
    <span class="font-medium ml-2">Abanoub Nassem</span>
  </div>
</template>

<script lang="ts" setup>
import { useLogo } from "@/Composables/trinity_logo";

const logo = useLogo();
</script>
