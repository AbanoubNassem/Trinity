import BaseComponent from '@/types/Models/BaseComponent';
import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface Resource {
    name: string;
    primaryKeyColumn: string;
    label: string;
    pluralLabel: string;
    icon: string;
    showGridlines: boolean;
    stripedRows: boolean;
    schema?: Array<BaseComponent>;
    columns?: Array<BaseColumn>;
}
