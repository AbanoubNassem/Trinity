import BaseColumn from '@/types/Models/Columns/BaseColumn';
import React from 'react';
import Resource from '@/types/Models/Resource';

export default interface ColumnProps<T extends BaseColumn> {
    resource: Resource;
    column: T;
    columnValue: any;
    record: { [key: string]: any };
    children?: React.ReactNode;
}
