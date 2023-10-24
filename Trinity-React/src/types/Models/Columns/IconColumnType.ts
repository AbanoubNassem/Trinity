import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

export default interface IconColumnType extends TrinityColumnType {
    options?: Array<{ value: any; icon: string; color?: string }>;
    isBoolean: boolean;
    trueValue?: string;
    trueIcon?: string;
    trueColor?: string;
    falseValue?: string;
    falseIcon?: string;
    falseColor?: string;
}
