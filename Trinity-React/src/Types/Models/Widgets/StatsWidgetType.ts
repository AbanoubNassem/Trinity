import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';

export default interface StatsWidgetType extends TrinityWidgetType {
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
