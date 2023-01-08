import BaseField from '@/types/Models/Fields/BaseField';

export default interface SwitchInputField extends BaseField {
    trueValue?: any;
    falseValue?: any;
}
