import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface DateTimeField extends TrinityField {
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
