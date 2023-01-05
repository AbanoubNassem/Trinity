import type { ProgressSettings } from '@inertiajs/progress';

export type { ProgressSettings } from '@inertiajs/progress';

export default interface Configs {
    prefix: string;
    title: string;
    whiteLogo?: string;
    darkLogo?: string;
    favIcon?: string;
    progressSettings: ProgressSettings;
    rowsPerPageOptions: Array<number>;
    themeMode: ThemeMode;
}

export enum ThemeMode {
    Light,
    Dark
}
