import BaseField from '@/types/Models/Fields/BaseField';

export default interface DateTimeField extends BaseField {
    inline: boolean;
    selectionMode?: 'single' | 'multiple' | 'range' | undefined;
    dateFormat?: string;
    hourFormat?: '12' | '24' | undefined;
    showTime: boolean;
    timeOnly: boolean;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    disabledDays?: number[];
    showIcon: boolean;
    iconPos?: 'left' | 'right' | undefined;
    view?: 'date' | 'month' | undefined;
}
