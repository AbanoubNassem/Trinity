import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';
export default interface BarChartWidget extends TrinityWidget {
    borderColors?: Array<string>;
    borderWidth: number;
}
