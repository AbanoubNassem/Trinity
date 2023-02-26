import BaseWidget from '@/types/Models/Widgets/BaseWidget';

export default interface StatsWidget extends BaseWidget {
    title: string;
    value: string;
    icon?: string;
    iconColor?: string;
    iconBackgroundColor?: string;
    description?: string;
    descriptionColor?: string;
    chartBackgroundColor?: string;
    chartBorderColor?: string;
}
