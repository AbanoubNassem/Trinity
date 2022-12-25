import type Errors from '@/Types/Models/errors';

import type BaseField from '@/Types/Models/BaseField';
import { InertiaFormProps } from '@inertiajs/inertia-react';

export default interface FieldProps<T extends BaseField> {
    component: T;
    form: InertiaFormProps<any>;
    errors: Errors;
}
