import TrinityField from '@/types/Models/Fields/TrinityField';
import { SelectItemOptionsType } from 'primereact/selectitem';

export default interface SelectField extends TrinityField {
    options: SelectItemOptionsType;
    multiple: boolean;
    selectionLimit?: number;
    display?: string;
}
