import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface IconColumn extends BaseColumn {
    options?: Array<{ value: any; icon: string; color?: string }>;
    isBoolean: boolean;
    trueValue?: string;
    trueIcon?: string;
    trueColor?: string;
    falseValue?: string;
    falseIcon?: string;
    falseColor?: string;
}
