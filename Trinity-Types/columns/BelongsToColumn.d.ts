/// <reference types="react" />
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import RelationshipColumn from '@/types/Models/Columns/RelationshipColumn';
declare const BelongsToColumn: ({ column, record }: ColumnProps<RelationshipColumn>) => JSX.Element;
export default BelongsToColumn;
