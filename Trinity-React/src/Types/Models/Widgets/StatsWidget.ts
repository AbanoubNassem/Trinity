import BaseWidget from '@/types/Models/Widgets/BaseWidget';

export default interface StatsWidget extends BaseWidget {
    title: string;
    value: string;
    icon?: string;
    iconColor?: string;
    iconBackgroundColor?: string;
    description?: string;
    descriptionColor?: string;
    chartLabels?: Array<any>;
    chartValues?: Array<any>;
    chartBackgroundColor?: string;
    chartBorderColor?: string;
}
