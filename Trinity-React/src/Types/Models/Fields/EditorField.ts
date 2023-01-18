import BaseField from '@/types/Models/Fields/BaseField';

export default interface EditorField extends BaseField {
    height: string;
    headerButtons?: string[];
    modules?: object;
    maxLength?: number;
}
