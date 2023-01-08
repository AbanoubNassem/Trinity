import BaseField from '@/types/Models/Fields/BaseField';

export default interface MaskField extends BaseField {
    autoClear: boolean;
    inputMask?: string;
    slotChar?: string;
}
