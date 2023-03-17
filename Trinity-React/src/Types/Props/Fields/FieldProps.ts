import TrinityField from '@/types/Models/Fields/TrinityField';
import { ErrorBag, Errors } from '@inertiajs/core/types/types';
import TrinityResource from '@/types/Models/TrinityResource';
import Configs from '@/types/Models/Configs';

export default interface FieldProps<T extends TrinityField> {
    configs: Configs;
    resource: TrinityResource;
    component: T;
    record: any;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
    localize: (key: string, ...args: Array<string>) => string;
}
