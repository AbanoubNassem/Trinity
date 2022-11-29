import { useConfigStore } from "@/Stores/ConfigStore";
import { inject } from "vue";

export function useLogo() {
  const { configs } = useConfigStore();
  const $appState = inject<any>("appState");

  return $appState.darkTheme
    ? configs.whiteLogo ?? "/trinity/dist/logo.svg"
    : configs.darkLogo ?? "/trinity/dist/logo.svg";
}
