import React, { useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import BaseField from '@/types/Models/Fields/BaseField';

const TextField = ({ component, formData, setFieldValue, errors }: FieldProps<BaseField>) => {
    const [value, setValue] = useState(formData[component.columnName] ?? '');
    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <InputText
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors?.value[component.columnName] })}
                tooltip={component.tooltip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    setFieldValue(component.columnName, event.target.value);
                }}
            />
        </BaseFieldComponent>
    );
};

export default TextField;
