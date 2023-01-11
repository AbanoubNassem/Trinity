import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import BaseColumn from '@/types/Models/Columns/BaseColumn';
import { ColorPicker } from 'primereact/colorpicker';

const ColorColumn = ({ columnValue }: ColumnProps<BaseColumn>) => {
    return (
        <ColorPicker
            value={columnValue}
            className="pointer-events-none"
        />
    );
};

export default ColorColumn;
