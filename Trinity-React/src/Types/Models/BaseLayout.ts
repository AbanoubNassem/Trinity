import type BaseComponent from '@/Types/Models/BaseComponent';

export default interface BaseLayout extends BaseComponent {
    columns: number;

    schema: Array<BaseComponent>;
}
