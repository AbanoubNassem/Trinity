import { Inertia } from "@inertiajs/inertia";
import { useConfigStore } from "@/Stores/ConfigStore";

export function useTrinityLink(href: string) {
  const configStore = useConfigStore();

  Inertia.visit(`/${configStore.configs.prefix}${href}`, {
    preserveState: true,
    preserveScroll: true,
  });
}
