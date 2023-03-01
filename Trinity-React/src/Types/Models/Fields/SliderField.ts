import TrinityField from '@/types/Models/Fields/TrinityField';
import { SliderOrientationType } from 'primereact/slider';

export default interface SliderField extends TrinityField {
    min: number;
    max: number;
    orientation: SliderOrientationType;
    step: number;
    range?: boolean;
}
