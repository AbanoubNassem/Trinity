import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import TextFieldType from '@/types/Models/Fields/TextFieldType';

const TextField = ({ component, formData, setFieldValue, errors }: FieldProps<TextFieldType>) => {
    const [value, setValue] = useState(formData[component.columnName] ?? '');
    return (
        <InputText
            id={component.columnName}
            name={component.columnName}
            disabled={component.disabled}
            hidden={component.hidden}
            type={component.inputType}
            required={component.isRequired}
            placeholder={component.placeholder}
            minLength={component.minLength}
            maxLength={component.maxLength}
            autoComplete={component.autoComplete}
            className={classNames({ 'p-invalid': errors[component.columnName] })}
            tooltip={component.tooltip}
            tooltipOptions={{ event: 'focus', position: 'top' }}
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
                setFieldValue(component.columnName, event.target.value);
            }}
        />
    );
};

export default TextField;
