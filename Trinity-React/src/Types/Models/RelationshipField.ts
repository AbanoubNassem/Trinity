import SelectField from '@/Types/Models/SelectField';

export default interface RelationshipField extends SelectField {
    lazy: boolean;
    lazyItemsCount: number;
    relationshipName?: string;
    foreignColumn?: string;
    foreignTable?: string;
}
