import type { ProgressSettings } from "@inertiajs/progress";

export default interface Configs {
  prefix: String;
  title: String;
  whiteLogo?: String;
  darkLogo?: String;
  favIcon?: String;
  progressSettings: ProgressSettings;
  rowsPerPageOptions: Array<number>;
  themeMode: ThemeMode;
}

export enum ThemeMode {
  Light,
  Dark,
}
