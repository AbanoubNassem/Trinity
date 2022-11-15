import { defineStore } from "pinia";
import type Configs from "@/Models/Configs";
import type { Resource } from "@/Models/Resource";

export const useConfigStore = defineStore("config", {
  state() {
    return {
      configs: {} as Configs,
      resources: [] as Array<Resource>,
    };
  },
});
