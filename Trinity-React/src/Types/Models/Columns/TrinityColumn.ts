import TrinityComponent from '@/types/Models/TrinityComponent';
import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface TrinityColumn extends TrinityComponent {
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
    customFilter?: TrinityField;
}
