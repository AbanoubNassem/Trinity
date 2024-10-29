import { useState } from 'react';

import { InputSwitch } from 'primereact/inputswitch';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import SwitchInputFieldType from '@/types/Models/Fields/SwitchInputFieldType';

const SwitchInputField = ({ component, errors, formData, setFieldValue }: FieldProps<SwitchInputFieldType>) => {
    const getValue = (defaultValue = component.falseValue) => {
        const { columnName, trueValue, falseValue } = component;
        const value = formData[columnName];

        switch (value) {
            case true:
                return trueValue;
            case false:
                return falseValue;
            default:
                return value !== undefined ? value : defaultValue;
        }
    };

    const [value, setValue] = useState(getValue());

    return (
        <InputSwitch
            id={component.columnName}
            name={component.columnName}
            disabled={component.disabled}
            hidden={component.hidden}
            placeholder={component.placeholder}
            required={component.isRequired}
            className={classNames({ 'p-invalid': errors[component.columnName] })}
            tooltip={component.tooltip}
            tooltipOptions={{ event: 'focus', position: 'top' }}
            checked={value}
            onChange={(e) => {
                setValue(e.value);
                setFieldValue(component.columnName, e.value);
            }}
            trueValue={component.trueValue ?? true}
            falseValue={component.falseValue ?? false}
        />
    );
};

export default SwitchInputField;
