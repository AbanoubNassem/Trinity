import TrinityComponentType from '@/types/Models/TrinityComponentType';

export default interface TrinityWidgetType extends TrinityComponentType {
    chartLabels: Array<any>;
    chartValues: Array<any>;
    backgroundColors?: Array<string>;
    options?: object;
    height?: string;
}
