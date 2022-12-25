import type FieldProps from '@/Types/Props/FieldProps';
import type SelectField from '@/Types/Models/SelectField';
import { SelectItemOptionsType } from 'primereact/selectitem';
import { VirtualScrollerLazyParams } from 'primereact/virtualscroller';

export default interface SelectFieldProps extends FieldProps<SelectField> {
    search?: (e: VirtualScrollerLazyParams & { filter: string }) => Promise<SelectItemOptionsType>;
    disabled?: boolean;
    options?: SelectItemOptionsType;
    lazy?: boolean;
}
