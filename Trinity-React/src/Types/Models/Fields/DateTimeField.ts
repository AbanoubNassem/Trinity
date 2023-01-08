import { CalendarIconPosType } from 'primereact/calendar';
import BaseField from '@/types/Models/Fields/BaseField';

export default interface DateTimeField extends BaseField {
    inline: boolean;
    selectionMode: string;
    dateFormat?: string;
    hourFormat: string;
    showTime: boolean;
    timeOnly: boolean;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    disabledDays?: number[];
    showIcon: boolean;
    iconPos: CalendarIconPosType;
    view?: string;
}
