import TrinityColumn from '@/types/Models/Columns/TrinityColumn';

export default interface AggregateColumn extends TrinityColumn {
    aggregateAlias: string;
}
