import TrinityComponent from '@/types/Models/TrinityComponent';

export default interface TrinityField extends TrinityComponent {
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
    prefixes?: Array<string>;
    suffixes?: Array<string>;
    prefixIcons?: Array<string>;
    suffixIcons?: Array<string>;
    locale?: string;
    defaultValue?: any;
}
