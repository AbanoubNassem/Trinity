import BaseComponent from '@/types/Models/TrinityComponentType';
import { Errors, ErrorBag } from '@inertiajs/core/types/types';
import TrinityResource from '@/types/Models/TrinityResource';
import Configs from '@/types/Models/Configs';
import { CSSProperties } from 'react';

export default interface LayoutProps<T extends BaseComponent> {
    configs: Configs;
    resource: TrinityResource;
    component: T;
    record: object;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
    style?: CSSProperties | undefined;
    localize: (key: string, ...args: Array<string>) => string;
}
