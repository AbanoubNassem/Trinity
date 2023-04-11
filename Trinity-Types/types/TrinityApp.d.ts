import Configs from '@/types/Models/Configs';
import TrinityResource from '@/types/Models/TrinityResource';
import React from 'react';
import { Toast } from 'primereact/toast';
import TrinityPage from '@/types/Models/Pages/TrinityPage';
import TrinityUser from '@/types/Models/TrinityUser';
export declare class TrinityApp {
    private static localizer;
    static configs: Configs;
    static user: TrinityUser;
    static resources: Array<TrinityResource>;
    static pages: {
        [key: string]: TrinityPage;
    };
    static registeredPages: Map<string, (props: any) => React.ReactNode>;
    static registeredComponents: Map<string, (props: any) => React.ReactNode>;
    static registeredColumns: Map<string, (props: any) => React.ReactNode>;
    static registeredWidgets: Map<string, (props: any) => React.ReactNode>;
    static toast?: Toast;
    static isRtl: boolean;
    static init: (props: any) => void;
    private static loadDefaults;
    static registerComponent: (name: string, component: (props: any) => React.ReactNode) => void;
    static registerField: (name: string, component: (props: any) => React.ReactNode) => void;
    static registerColumn: (name: string, component: (props: any) => React.ReactNode) => void;
    static registerWidget: (name: string, component: (props: any) => React.ReactNode) => void;
    static registerPage: (name: string, component: (props: any) => React.ReactNode) => void;
    static localize: (key: string, ...args: Array<string>) => string;
}
export default TrinityApp;
