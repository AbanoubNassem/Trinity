import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';
import { SelectItemOptionsType } from 'primereact/selectitem';

export default interface SelectFieldType extends TrinityFieldType {
    options: SelectItemOptionsType;
    multiple: boolean;
    selectionLimit?: number;
    display?: string;
}
