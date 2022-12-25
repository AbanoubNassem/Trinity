import type BaseField from '@/Types/Models/BaseField';
import { SelectItemOptionsType } from 'primereact/selectitem';

export default interface SelectField extends BaseField {
    options: SelectItemOptionsType;
    multiple: boolean;
    selectionLimit?: number;
    display?: string;
}
