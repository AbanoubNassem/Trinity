import React, { useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import FieldProps from '@/types/Props/Fields/FieldProps';
import TextAreaField from '@/types/Models/Fields/TextAreaField';

const TextAreaField = ({ component, formData, setFieldValue, errors }: FieldProps<TextAreaField>) => {
    const [value, setValue] = useState(formData[component.columnName]);

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <InputTextarea
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors[component.columnName] })}
                tooltip={component.tooltip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                autoResize={component.autoResize}
                rows={component.rows}
                cols={component.cols}
                value={value}
                onChange={(event) => {
                    setFieldValue(component.columnName, event.target.value);
                    setValue(event.target.value);
                }}
            />
        </BaseFieldComponent>
    );
};

export default TextAreaField;
