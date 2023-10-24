import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface SwitchInputFieldType extends TrinityFieldType {
    trueValue?: any;
    falseValue?: any;
}
