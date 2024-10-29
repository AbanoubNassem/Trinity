import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

export default interface AggregateColumnType extends TrinityColumnType {
    aggregateAlias: string;
}
