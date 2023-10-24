import TrinityComponentType from '@/types/Models/TrinityComponentType';
import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface TrinityColumnType extends TrinityComponentType {
    columnName: string;
    relationshipName?: string;
    initialValue: string;
    title: string;
    sortable: boolean;
    searchable: boolean;
    isIndividuallySearchable: boolean;
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
    customFilter?: TrinityFieldType;
}
