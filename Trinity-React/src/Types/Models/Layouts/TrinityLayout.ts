import TrinityComponent from '@/types/Models/TrinityComponent';

export default interface TrinityLayout extends TrinityComponent {
    columns?: number;

    schema: Array<TrinityComponent>;
}
