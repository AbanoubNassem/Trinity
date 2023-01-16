import React from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import FieldProps from "@/types/Props/Fields/FieldProps";
import TextAreaField from '@/types/Models/Fields/TextAreaField';

const TextAreaField = ({ component, formData, setFieldValue, errors }: FieldProps<TextAreaField>) => {
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
                className={classNames({ 'p-invalid': errors?.value[component.columnName] })}
                tooltip={component.tooltip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                autoResize={component.autoResize}
                rows={component.rows}
                cols={component.cols}
                value={formData[component.columnName]}
                onChange={(event) => setFieldValue(component.columnName, event.target.value)}
            />
        </BaseFieldComponent>
    );
};

export default TextAreaField;
