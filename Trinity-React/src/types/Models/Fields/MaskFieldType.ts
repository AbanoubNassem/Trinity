import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface MaskFieldType extends TrinityFieldType {
    autoClear: boolean;
    inputMask?: string;
    slotChar?: string;
}
