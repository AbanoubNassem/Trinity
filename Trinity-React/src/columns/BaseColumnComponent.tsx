import React from 'react';
import omit from 'lodash/omit';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

const BaseColumnComponent = ({ column, record, children, resource }: ColumnProps<TrinityColumnType>) => {
    const tooltipId = `${column.columnName}_${record[resource.primaryKeyColumn]}_tooltip`;

    return (
        <div
            {...omit(record[`${column.columnName}_extraAttributes`], ['class', 'className'])}
            className={classNames(`text-${column.color ?? 'black'}-600`, record[`${column.columnName}_extraAttributes`]?.class ?? record[`${column.columnName}_extraAttributes`]?.className)}
            style={{ fontFamily: column.fontFamily }}
        >
            {(record[`${column.columnName}_tooltip`] || column.tooltip) && <Tooltip target={`#${tooltipId}`} />}

            <div
                id={tooltipId}
                data-pr-tooltip={record[`${column.columnName}_tooltip`] ?? column.tooltip}
                data-pr-position="top"
            >
                {column.descriptionPosition === 'above' ? (
                    <div className="text-sm text-gray-500 mb-1">
                        <p>{record[`${column.columnName}_description`] ?? column.description}</p>
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
                        <p>{record[`${column.columnName}_description`] ?? column.description}</p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default BaseColumnComponent;
