import BaseComponent from '@/types/Models/BaseComponent';

export default interface BaseColumn extends BaseComponent {
    columnName: string;
    relationshipName?: string;
    initialValue: string;
    title: string;
    sortable: boolean;
    searchable: boolean;
    isGloballySearchable: boolean;
    searchPlaceholder?: string;
    exportable: boolean;
    description?: string;
    descriptionPosition?: string;
    html: boolean;
    color?: string;
    icon?: string;
    iconPosition?: string;
    size?: string;
    weight?: string;
    fontFamily?: string;
}
