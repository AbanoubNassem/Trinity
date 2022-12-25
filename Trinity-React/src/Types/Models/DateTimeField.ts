import type BaseField from '@/Types/Models/BaseField';
import { CalendarIconPosType } from 'primereact/calendar';

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
