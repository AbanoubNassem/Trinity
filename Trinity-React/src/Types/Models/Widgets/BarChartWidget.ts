import BaseWidget from '@/types/Models/Widgets/BaseWidget';

export default interface BarChartWidget extends BaseWidget {
    borderColors?: Array<string>;
    borderWidth: number;
}
