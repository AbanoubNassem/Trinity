import { Inertia } from "@inertiajs/inertia";
import { useConfigStore } from "@/Stores/ConfigStore";

export function useTrinityLink(
  href: string,
  preserveScroll: boolean = false,
  preserveState: boolean = true
) {
  const configStore = useConfigStore();

  Inertia.visit(`/${configStore.configs.prefix}${href}`, {
    preserveState: preserveState,
    preserveScroll: preserveScroll,
  });
}
