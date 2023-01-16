import React, { useState } from 'react';

import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { InputSwitch } from 'primereact/inputswitch';
import { classNames } from 'primereact/utils';
import FieldProps from "@/types/Props/Fields/FieldProps";
import SwitchInputField from '@/types/Models/Fields/SwitchInputField';


const SwitchInputField = ({ component, errors, formData, setFieldValue }: FieldProps<SwitchInputField>) => {
    const [value, setValue] = useState(formData[component.columnName] ?? component.defaultValue ?? false);

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <InputSwitch
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors?.value[component.columnName] })}
                tooltip={component.tooltip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                checked={value}
                onChange={(e) => {
                    setFieldValue(component.columnName, e.value);
                    setValue(e.value);
                }}
                trueValue={component.trueValue}
                falseValue={component.falseValue}
            />
        </BaseFieldComponent>
    );
};

export default SwitchInputField;
