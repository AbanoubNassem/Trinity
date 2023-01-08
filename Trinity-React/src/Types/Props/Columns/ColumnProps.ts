import BaseColumn from '@/types/Models/Columns/BaseColumn';
import React from 'react';

export default interface ColumnProps<T extends BaseColumn> {
    column: T;
    columnValue: any;
    record: { [key: string]: any };
    children?: React.ReactNode;
}
