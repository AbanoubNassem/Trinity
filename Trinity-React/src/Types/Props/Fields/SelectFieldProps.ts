import { SelectItemOptionsType } from 'primereact/selectitem';
import { VirtualScrollerLazyParams } from 'primereact/virtualscroller';
import FieldProps from '@/types/Props/Fields/FieldProps';
import SelectField from '@/types/Models/Fields/SelectField';

export default interface SelectFieldProps extends FieldProps<SelectField> {
    value?: any;
    search?: (e: VirtualScrollerLazyParams & { filter: string; value: any }) => Promise<SelectItemOptionsType>;
    disabled?: boolean;
    options?: SelectItemOptionsType;
    lazy?: boolean;

    lazyItemsCount?: number;
}
