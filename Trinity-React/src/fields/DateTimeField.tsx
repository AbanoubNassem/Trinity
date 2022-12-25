import React, { useState } from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';
import DateTimeField from '@/Types/Models/DateTimeField';
import moment from 'moment';

const DateTimeField = ({ component, form, errors }: FieldProps<DateTimeField>) => {
    // const [value, setValue] = useState(form?.data[component.columnName]);
    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <Calendar
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                readOnlyInput={component.disabled}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors?.value[component.columnName] })}
                tooltip={component.toolTip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                value={form?.data[component.columnName]}
                onChange={(event) => {
                    // const formatted = moment(event.target.value as any).format(component.dateFormat);
                    form?.setData(component.columnName, event.target.value);
                    // setValue(value);
                }}
                inline={component.inline}
                selectionMode={component.selectionMode}
                dateFormat={component.dateFormat}
                hourFormat={component.hourFormat}
                showTime={component.showTime}
                timeOnly={component.timeOnly}
                minDate={component.minDate ? new Date(Date.parse(component.minDate)) : undefined}
                maxDate={component.maxDate ? new Date(Date.parse(component.maxDate)) : undefined}
                disabledDays={component.disabledDays}
                disabledDates={component.disabledDates ? component.disabledDates.map((d) => new Date(Date.parse(d))) : undefined}
                showButtonBar
                showIcon={component.showIcon}
                iconPos={component.iconPos}
                view={component.view}
            />
        </BaseFieldComponent>
    );
};

export default DateTimeField;
