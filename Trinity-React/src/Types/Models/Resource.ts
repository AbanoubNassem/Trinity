import type BaseComponent from '@/Types/Models/BaseComponent';

export default interface Resource {
    name: string;
    label: string;
    pluralLabel: string;
    icon: string;
    showGridlines: boolean;
    stripedRows: boolean;
    schema: Array<BaseComponent>;
}
