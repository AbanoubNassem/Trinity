import React from 'react';
import { Image } from 'primereact/image';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import ImageColumnType from '@/types/Models/Columns/ImageColumnType';
import { classNames } from 'primereact/utils';

const ImageColumn = ({ column, columnValue, record }: ColumnProps<ImageColumnType>) => {
    const value = columnValue ? columnValue.split(',')[0] : undefined;

    return (
        <Image
            src={value ? (value.startsWith('http') ? value : `/${value}`) : value}
            alt={record[`${column.columnName}_alt`] ?? column.alt}
            preview={column.isPreviewable}
            downloadable={column.isDownloadable}
            imageClassName={classNames({ 'p-avatar-circle': column.isCircular })}
            imageStyle={{
                width: column.width,
                height: column.height ?? '6rem'
            }}
        />
    );
};

export default ImageColumn;
