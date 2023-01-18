import BaseField from '@/types/Models/Fields/BaseField';
import { SliderOrientationType } from 'primereact/slider';

export default interface SliderField extends BaseField {
    min: number;
    max: number;
    orientation: SliderOrientationType;
    step: number;
    range?: boolean;
}
