import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
export default interface IconColumn extends TrinityColumn {
    options?: Array<{
        value: any;
        icon: string;
        color?: string;
    }>;
    isBoolean: boolean;
    trueValue?: string;
    trueIcon?: string;
    trueColor?: string;
    falseValue?: string;
    falseIcon?: string;
    falseColor?: string;
}
