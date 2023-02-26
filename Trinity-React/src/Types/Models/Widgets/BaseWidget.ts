import BaseComponent from '@/types/Models/BaseComponent';

export default interface BaseWidget extends BaseComponent {
    chartLabels: Array<any>;
    chartValues: Array<any>;
    backgroundColors?: Array<string>;
    options?: object;
    height?: string;
}
