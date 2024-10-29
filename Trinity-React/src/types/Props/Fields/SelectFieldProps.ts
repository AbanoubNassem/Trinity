import { SelectItemOptionsType } from 'primereact/selectitem';
import { VirtualScrollerLazyEvent } from 'primereact/virtualscroller';
import FieldProps from '@/types/Props/Fields/FieldProps';
import SelectFieldType from '@/types/Models/Fields/SelectFieldType';

export default interface SelectFieldProps extends FieldProps<SelectFieldType> {
    value?: any;
    search?: (e: VirtualScrollerLazyEvent & { filter: string; value: any }) => Promise<SelectItemOptionsType>;
    disabled?: boolean;
    options?: SelectItemOptionsType;
    lazy?: boolean;

    lazyItemsCount?: number;
}
