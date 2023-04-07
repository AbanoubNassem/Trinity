import React, { useEffect, useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import DateTimeField from '@/types/Models/Fields/DateTimeField';

const DateTimeField = ({ component, formData, setFieldValue, errors }: FieldProps<DateTimeField>) => {
    const getValue = () => {
        if (!formData[component.columnName]) return undefined;

        switch (component.selectionMode) {
            default:
            case 'single':
                return new Date(Date.parse(formData[component.columnName]));
            case 'multiple':
            case 'range': {
                let dates = Array<Date>();
                for (const date of formData[component.columnName]) {
                    dates.push(new Date(Date.parse(date)));
                }
                return dates;
            }
        }
    };

    const [value, setValue] = useState(getValue());

    useEffect(() => {
        setFieldValue(component.columnName, getValue());
    }, [component]);

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <Calendar
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                required={component.isRequired}
                readOnlyInput={component.disabled}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors[component.columnName] })}
                tooltip={component.tooltip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                value={value}
                onChange={(event) => {
                    // const formatted = moment(event.target.value as any).format(component.dateFormat);
                    console.log(event.target.value);
                    setValue(event.target.value as any);
                    setFieldValue(component.columnName, event.target.value);
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
