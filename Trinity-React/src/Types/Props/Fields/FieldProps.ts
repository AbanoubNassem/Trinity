import type Errors from '@/Types/Models/errors';
import BaseField from '@/types/Models/Fields/BaseField';

export default interface FieldProps<T extends BaseField> {
    component: T;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors;
}
