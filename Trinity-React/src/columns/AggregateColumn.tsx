import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import AggregateColumn from '@/types/Models/Columns/AggregateColumn';

const AggregateColumn = ({ column, record, columnValue }: ColumnProps<AggregateColumn>) => {
    return <>{columnValue}</>;
};

export default AggregateColumn;
