import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface TextField extends TrinityField {
    minLength?: number;
    maxLength?: number;
    autoComplete?: string;
}
