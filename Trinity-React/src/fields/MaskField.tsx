import React from 'react';

import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import { InputMask } from 'primereact/inputmask';
import FieldProps from '@/types/Props/Fields/FieldProps';
import MaskField from '@/types/Models/Fields/MaskField';

const MaskField = ({ component, formData, setFieldValue, errors }: FieldProps<MaskField>) => {
    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <InputMask
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                required={component.isRequired}
                className={classNames({ 'p-invalid': errors[component.columnName] })}
                tooltip={component.tooltip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                mask={component.inputMask}
                slotChar={component.slotChar ?? '_'}
                autoClear={component.autoClear}
                value={formData[component.columnName]}
                onChange={(event) => setFieldValue(component.columnName, event.target.value)}
            />
        </BaseFieldComponent>
    );
};

export default MaskField;
