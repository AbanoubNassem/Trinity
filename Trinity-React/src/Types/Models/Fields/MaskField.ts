import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface MaskField extends TrinityField {
    autoClear: boolean;
    inputMask?: string;
    slotChar?: string;
}
