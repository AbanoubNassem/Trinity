import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';
import { ColorPicker } from 'primereact/colorpicker';

const ColorColumn = ({ columnValue }: ColumnProps<TrinityColumnType>) => {
    return (
        <ColorPicker
            value={columnValue}
            className="pointer-events-none"
        />
    );
};

export default ColorColumn;
