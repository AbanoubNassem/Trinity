import BaseField from '@/types/Models/Fields/BaseField';
import {ErrorBag, Errors} from "@inertiajs/core/types/types";

export default interface FieldProps<T extends BaseField> {
    component: T;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
}
