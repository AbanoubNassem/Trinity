import BaseComponent from '@/types/Models/BaseComponent';

export default interface BaseField extends BaseComponent {
    columnName: string;
    relationshipName?: string;
    initialValue: string;
    title: string;
    sortable: boolean;
    searchable: boolean;
    isGloballySearchable: boolean;
    searchPlaceholder?: string;
    exportable: boolean;
    placeholder?: string;
    helperText?: string;
    tooltip?: string;
    disabled: boolean;
    prefixes?: Array<string>;
    suffixes?: Array<string>;
    prefixIcons?: Array<string>;
    suffixIcons?: Array<string>;
    locale?: string;
    defaultValue?: any;
}
