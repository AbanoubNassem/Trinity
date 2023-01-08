import BaseComponent from '@/types/Models/BaseComponent';
import type Errors from '@/Types/Models/errors';

export default interface LayoutProps<T extends BaseComponent> {
    component: T;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors;
}
