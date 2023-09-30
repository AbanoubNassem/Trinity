import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';

export default interface BarChartWidgetType extends TrinityWidgetType {
    borderColors?: Array<string>;
    borderWidth: number;
}
