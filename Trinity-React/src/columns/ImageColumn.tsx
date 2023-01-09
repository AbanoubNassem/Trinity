import React from 'react';
import { Image } from 'primereact/image';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import ImageColumn from '@/types/Models/Columns/ImageColumn';
import { classNames } from 'primereact/utils';

const ImageColumn = ({ column, columnValue, record }: ColumnProps<ImageColumn>) => {
    return (
        <Image
            src={columnValue}
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
