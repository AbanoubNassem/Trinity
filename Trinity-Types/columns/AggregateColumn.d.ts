/// <reference types="react" />
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import AggregateColumn from '@/types/Models/Columns/AggregateColumn';
declare const AggregateColumn: ({ column, record, columnValue }: ColumnProps<AggregateColumn>) => JSX.Element;
export default AggregateColumn;
