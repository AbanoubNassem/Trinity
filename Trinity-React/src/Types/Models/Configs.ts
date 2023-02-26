import BasePage from '@/types/Models/Pages/BasePage';

export default interface Configs {
    prefix: string;
    title: string;
    whiteLogo?: string;
    darkLogo?: string;
    favIcon?: string;
    progressSettings: any;
    rowsPerPageOptions: Array<number>;
    dashboardPage: BasePage;
    themeMode: ThemeMode;
}

export enum ThemeMode {
    Light,
    Dark
}
