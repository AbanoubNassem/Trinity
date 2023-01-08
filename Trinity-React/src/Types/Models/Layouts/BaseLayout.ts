import BaseComponent from '@/types/Models/BaseComponent';

export default interface BaseLayout extends BaseComponent {
    columns: number;

    schema: Array<BaseComponent>;
}
