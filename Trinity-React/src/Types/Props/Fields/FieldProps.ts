import BaseField from '@/types/Models/Fields/BaseField';
import { ErrorBag, Errors } from '@inertiajs/core/types/types';
import Resource from '@/types/Models/Resource';
import Configs from '@/types/Models/Configs';

export default interface FieldProps<T extends BaseField> {
    configs: Configs;
    resource: Resource;
    component: T;
    record: any;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
}
