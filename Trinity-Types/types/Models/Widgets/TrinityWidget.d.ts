import TrinityComponent from '@/types/Models/TrinityComponent';
export default interface TrinityWidget extends TrinityComponent {
    chartLabels: Array<any>;
    chartValues: Array<any>;
    backgroundColors?: Array<string>;
    options?: object;
    height?: string;
}
