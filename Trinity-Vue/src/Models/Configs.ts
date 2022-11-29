import type { ProgressSettings } from "@inertiajs/progress";

interface Configs {
  prefix: String;
  title: String;
  whiteLogo?: String;
  darkLogo?: String;
  favIcon?: String;
  progressSettings: ProgressSettings;
  rowsPerPageOptions: Array<number>;
  themeMode: ThemeMode;
}

export default Configs;

export enum ThemeMode {
  Light,
  Dark,
}
