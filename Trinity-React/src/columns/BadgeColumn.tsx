import ColumnProps from '@/types/Props/Columns/ColumnProps';
import BadgeColumn from '@/types/Models/Columns/BadgeColumn';
import { Badge } from 'primereact/badge';
import React from 'react';
import { Button } from 'primereact/button';

const BadgeColumn = ({ column, columnValue }: ColumnProps<BadgeColumn>) => {
    const option = column.options?.find((x) => x.key === columnValue);

    if (option?.icon)
        return (
            <Button
                type="button"
                icon={option.icon}
                className={`p-button-rounded p-button-sm pointer-events-none p-button-${option.severity ?? 'primary'}`}
            >
                <Badge value={option?.value ?? columnValue}></Badge>
            </Button>
        );

    return (
        <Badge
            value={option?.value ?? columnValue}
            severity={option?.severity as any}
            size={(column.size as any) ?? 'normal'}
            className={'pointer'}
        />
    );
};

export default BadgeColumn;

//TODO:: check which is better:
// <Tag
//     value={option?.value ?? columnValue}
//     severity={option?.severity as any}
//     icon={option?.icon}
//     className="badge-column"
// />
