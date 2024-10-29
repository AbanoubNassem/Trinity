import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface TextFieldType extends TrinityFieldType {
    minLength?: number;
    maxLength?: number;
    autoComplete?: string;
}
