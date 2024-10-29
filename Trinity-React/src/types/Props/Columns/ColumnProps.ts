import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

import TrinityResource from '@/types/Models/TrinityResource';

export default interface ColumnProps<T extends TrinityColumnType> {
    resource: TrinityResource;
    column: T;
    columnValue: any;
    record: { [key: string]: any };
    children?: React.ReactNode;
    localize: (key: string, ...args: Array<string>) => string;
}
