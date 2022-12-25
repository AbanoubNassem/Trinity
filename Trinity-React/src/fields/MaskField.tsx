import React from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import MaskField from '@/Types/Models/MaskField';
import { InputMask } from 'primereact/inputmask';

const MaskField = ({ component, form, errors }: FieldProps<MaskField>) => {
    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <InputMask
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                placeholder={component.placeholder}
                type="text"
                className={classNames({ 'p-invalid': errors?.value[component.columnName] })}
                tooltip={component.toolTip}
                tooltipOptions={{ event: 'focus', position: 'top' }}
                mask={component.inputMask}
                slotChar={component.slotChar ?? '_'}
                autoClear={component.autoClear}
                value={form?.data[component.columnName]}
                onChange={(event) => form?.setData(component.columnName, event.target.value)}
            />
        </BaseFieldComponent>
    );
};

export default MaskField;
