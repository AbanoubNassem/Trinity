import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
import React from 'react';
import TrinityResource from '@/types/Models/TrinityResource';

export default interface ColumnProps<T extends TrinityColumn> {
    resource: TrinityResource;
    column: T;
    columnValue: any;
    record: { [key: string]: any };
    children?: React.ReactNode;
    localize: (key: string, ...args: Array<string>) => string;
}
