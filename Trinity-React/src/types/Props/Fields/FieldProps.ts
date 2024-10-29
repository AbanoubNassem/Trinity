import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';
import { ErrorBag, Errors } from '@inertiajs/core';
import TrinityResource from '@/types/Models/TrinityResource';
import Configs from '@/types/Models/Configs';

export default interface FieldProps<T extends TrinityFieldType> {
    configs: Configs;
    resource: TrinityResource;
    component: T;
    record: any;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
    localize: (key: string, ...args: Array<string>) => string;
}
