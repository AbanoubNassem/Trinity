import type BaseField from '@/Types/Models/BaseField';

export default interface MaskField extends BaseField {
    autoClear: boolean;
    inputMask?: string;
    slotChar?: string;
}
