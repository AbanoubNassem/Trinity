import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface EditorFieldType extends TrinityFieldType {
    height: string;
    headerButtons?: string[];
    modules?: object;
    maxLength?: number;
}
