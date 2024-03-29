import { useState } from 'react';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import FieldProps from '@/types/Props/Fields/FieldProps';
import TextAreaFieldType from '@/types/Models/Fields/TextAreaFieldType';

const TextAreaField = ({ component, formData, setFieldValue, errors }: FieldProps<TextAreaFieldType>) => {
    const [value, setValue] = useState(formData[component.columnName]);

    return (
        <InputTextarea
            id={component.columnName}
            name={component.columnName}
            disabled={component.disabled}
            hidden={component.hidden}
            required={component.isRequired}
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
    );
};

export default TextAreaField;
