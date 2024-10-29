import ColumnProps from '@/types/Props/Columns/ColumnProps';
import TextColumnType from '@/types/Models/Columns/TextColumnType';
import moment from 'moment';
import { classNames } from 'primereact/utils';

const TextColumn = ({ column, columnValue, record }: ColumnProps<TextColumnType>) => {
    let value = column.timeAgo ? moment(columnValue).fromNow() : (column.dateTimeFormat ? moment(columnValue).format(column.dateTimeFormat) : columnValue) ?? record['defaultValue'];

    if (column.currency) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: column.currency
        });

        value = formatter.format(value);
    }

    return column.url ? (
        <a
            href={record[`${column.columnName}_url`] ?? ''}
            target={column.openUrlInNewTab ? '_blank' : ''}
            className={classNames('block', { [`text-${column.size}`]: column.size }, { [`font-${column.weight}`]: column.weight })}
        >
            {value}
        </a>
    ) : column.html ? (
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
    ) : (
        <div className={classNames({ [`text-${column.size}`]: column.size }, { [`font-${column.weight}`]: column.weight })}>{value}</div>
    );
};

export default TextColumn;
