import BaseComponent from '@/types/Models/BaseComponent';
import { Errors, ErrorBag } from '@inertiajs/core/types/types';

export default interface LayoutProps<T extends BaseComponent> {
    component: T;
    formData: any;
    setFieldValue: (name: string, value: any) => void;
    errors: Errors & ErrorBag;
}
