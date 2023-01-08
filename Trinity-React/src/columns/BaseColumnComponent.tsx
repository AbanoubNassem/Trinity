import React from 'react';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import BaseColumn from '@/types/Models/Columns/BaseColumn';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

const BaseColumnComponent = ({ column, record, children }: ColumnProps<BaseColumn>) => {
    return (
        <div
            {...record[`${column.columnName}_extraAttributes`]}
            className={classNames(record[`${column.columnName}_extraAttributes`] && 'className' in record[`${column.columnName}_extraAttributes`] ? record[`${column.columnName}_extraAttributes`]['className'] : '', {
                [`text-${column.color}-600`]: column.color
            })}
            style={{ fontFamily: column.fontFamily }}
        >
            {(record[`${column.columnName}_tooltip`] || column.tooltip) && <Tooltip target={`.${column.columnName}_tooltip`} />}

            <div
                className={`${column.columnName}_tooltip`}
                data-pr-tooltip={record[`${column.columnName}_tooltip`] ?? column.tooltip}
                data-pr-position="top"
            >
                {column.descriptionPosition === 'above' ? (
                    <div className="text-sm text-gray-500 mb-1">
                        <p>{column.description}</p>
                    </div>
                ) : (
                    <></>
                )}

                <div className="flex justify-content-start align-items-center">
                    {column.icon && column.iconPosition == 'before' && <i className={`mx-2 ${column.icon}`}></i>}
                    {children}
                    {column.icon && column.iconPosition == 'after' && <i className={`mx-2 ${column.icon}`}></i>}
                </div>

                {column.descriptionPosition === 'bellow' ? (
                    <div className="text-sm text-gray-500 mt-1">
                        <p>{column.description}</p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default BaseColumnComponent;
