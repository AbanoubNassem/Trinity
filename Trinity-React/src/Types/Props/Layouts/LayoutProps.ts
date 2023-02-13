import BaseComponent from '@/types/Models/BaseComponent';
import { Errors, ErrorBag } from '@inertiajs/core/types/types';
import Resource from '@/types/Models/Resource';
import Configs from '@/types/Models/Configs';
import {CSSProperties} from "react";

export default interface LayoutProps<T extends BaseComponent> {
    configs: Configs;
    resource: Resource;
    component: T;
    record: object;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
    style?: CSSProperties | undefined;
}
