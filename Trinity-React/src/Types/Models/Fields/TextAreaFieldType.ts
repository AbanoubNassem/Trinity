import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface TextAreaFieldType extends TrinityFieldType {
    autoResize: boolean;

    rows: number;

    cols: number;
}
