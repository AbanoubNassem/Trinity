import type { ProgressSettings } from "@inertiajs/progress";

interface Configs {
  prefix: String;
  title: String;
  progressSettings: ProgressSettings;
  themeMode: ThemeMode;
}

export default Configs;

export enum ThemeMode {
  Light,
  Dark,
}
