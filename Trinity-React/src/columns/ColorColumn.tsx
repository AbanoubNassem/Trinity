import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
import { ColorPicker } from 'primereact/colorpicker';

const ColorColumn = ({ columnValue }: ColumnProps<TrinityColumn>) => {
    return (
        <ColorPicker
            value={columnValue}
            className="pointer-events-none"
        />
    );
};

export default ColorColumn;
