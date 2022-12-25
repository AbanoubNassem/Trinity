import SelectField from '@/Types/Models/SelectField';

export default interface RelationshipField extends SelectField {
    lazy: boolean;
}
