import type BaseComponent from '@/Types/Models/BaseComponent';

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
    toolTip?: string;
    helperText?: string;
    disabled: boolean;
    hidden: boolean;
    prefixes?: Array<string>;
    suffixes?: Array<string>;
    prefixIcons?: Array<string>;
    suffixIcons?: Array<string>;
    locale?: string;
}
