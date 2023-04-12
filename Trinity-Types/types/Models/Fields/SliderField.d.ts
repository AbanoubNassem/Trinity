import TrinityField from '@/types/Models/Fields/TrinityField';
export default interface SliderField extends TrinityField {
    min: number;
    max: number;
    orientation: any;
    step: number;
    range?: boolean;
}
