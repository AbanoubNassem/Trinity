import type Errors from '@/Types/Models/errors';
import type BaseComponent from '@/Types/Models/BaseComponent';
import { InertiaFormProps } from '@inertiajs/inertia-react';

export default interface LayoutProps<T extends BaseComponent> {
    component: T;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors;
}
