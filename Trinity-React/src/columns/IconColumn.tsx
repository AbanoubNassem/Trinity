import ColumnProps from '@/types/Props/Columns/ColumnProps';
import IconColumnType from '@/types/Models/Columns/IconColumnType';
import { classNames } from 'primereact/utils';

const IconColumn = ({ column, columnValue }: ColumnProps<IconColumnType>) => {
    if (column.isBoolean) {
        const isTrue = column.trueValue ? columnValue === column.trueValue : !!columnValue === true;
        const isFalse = column.falseValue ? columnValue === column.falseValue : !!columnValue === false;

        return (
            <i
                className={classNames(
                    { [`${column.trueIcon ?? 'pi pi-check-circle'}`]: isTrue },
                    { [`text-${column.trueColor ?? 'green'}-600`]: isTrue },
                    { [`${column.falseIcon ?? 'pi pi-times-circle'}`]: isFalse },
                    { [`text-${column.falseColor ?? 'red'}-600`]: isFalse },
                    { [`text-${column.size}`]: column.size }
                )}
            />
        );
    }

    const option = column.options?.find((x) => x.value == columnValue) ?? column.options?.find((x) => x.value == null);
    return <i className={classNames(option?.icon, { [`text-${option?.color}-600`]: option?.color }, { [`text-${column.size}`]: column.size })} />;
};

export default IconColumn;
