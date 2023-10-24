import SelectFieldType from '@/types/Models/Fields/SelectFieldType';

export default interface RelationshipFieldType extends SelectFieldType {
    lazy: boolean;
    lazyItemsCount: number;
    relationshipName?: string;
    foreignColumn?: string;
    foreignTable?: string;
}
