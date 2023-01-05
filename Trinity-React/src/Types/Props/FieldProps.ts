import type Errors from '@/Types/Models/errors';

import type BaseField from '@/Types/Models/BaseField';

export default interface FieldProps<T extends BaseField> {
    component: T;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors;
}
