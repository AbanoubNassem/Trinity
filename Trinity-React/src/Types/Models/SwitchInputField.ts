import type BaseField from '@/Types/Models/BaseField';

export default interface SwitchInputField extends BaseField {
    trueValue?: any;
    falseValue?: any;
}
