import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

export default interface StatsWidget extends TrinityWidget {
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
