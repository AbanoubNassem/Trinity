import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

export default interface SliderFieldType extends TrinityFieldType {
    min: number;
    max: number;
    orientation: any;
    step: number;
    range?: boolean;
}
