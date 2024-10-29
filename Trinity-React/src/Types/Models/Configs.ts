export default interface Configs {
    prefix: string;
    title: string;
    whiteLogo?: string;
    darkLogo?: string;
    favIcon?: string;
    footer?: { value: string };
    progressSettings: any;
    rowsPerPageOptions: Array<number>;
    themeMode: ThemeMode;
    viteUrl: string;
    isDatabaseNotificationsEnabled: boolean;
}
export enum ThemeMode {
    Light,
    Dark
}
