import { defineStore } from "pinia";
import type Configs from "@/Types/Configs";
import type { Resource } from "@/Types/Resource";

export const useConfigStore = defineStore("config", {
  state() {
    return {
      configs: {} as Configs,
      resources: [] as Array<Resource>,
    };
  },
});
