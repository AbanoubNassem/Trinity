import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import AggregateColumnType from '@/types/Models/Columns/AggregateColumnType';

const AggregateColumn = ({ column, record, columnValue }: ColumnProps<AggregateColumnType>) => {
    return <>{columnValue}</>;
};

export default AggregateColumn;
