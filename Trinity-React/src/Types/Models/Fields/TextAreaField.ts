import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface TextAreaField extends TrinityField {
    autoResize: boolean;

    rows: number;

    cols: number;
}
