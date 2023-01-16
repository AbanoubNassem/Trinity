import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface AggregateColumn extends BaseColumn {
    aggregateAlias: string;
}
