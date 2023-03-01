import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface SwitchInputField extends TrinityField {
    trueValue?: any;
    falseValue?: any;
}
