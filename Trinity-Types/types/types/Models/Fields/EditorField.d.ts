import TrinityField from '@/types/Models/Fields/TrinityField';
export default interface EditorField extends TrinityField {
    height: string;
    headerButtons?: string[];
    modules?: object;
    maxLength?: number;
}
