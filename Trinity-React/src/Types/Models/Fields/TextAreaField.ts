import BaseField from '@/types/Models/Fields/BaseField';

export default interface TextAreaField extends BaseField {
    autoResize: boolean;

    rows: number;

    cols: number;
}
