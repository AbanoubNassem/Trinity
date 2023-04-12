import ColumnProps from '@/types/Props/Columns/ColumnProps';
import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
declare const BaseColumnComponent: ({ column, record, children, resource }: ColumnProps<TrinityColumn>) => JSX.Element;
export default BaseColumnComponent;
