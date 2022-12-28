import React from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import NumberField from '@/Types/Models/NumberField';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';

const NumberField = ({ component, formData, setFieldValue, errors }: FieldProps<NumberField>) => {
    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <InputNumber
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors?.value[component.columnName] })}
                tooltip={component.toolTip}
                tooltipOptions={{ event: 'hover', position: 'top' }}
                value={formData[component.columnName]}
                onValueChange={(event) => {
                    setFieldValue(component.columnName, event.value);
                }}
                mode={component.formatMode}
                minFractionDigits={component.minFractionDigits}
                maxFractionDigits={component.maxFractionDigits}
                locale={component.locale ?? undefined}
                currency={component.currency ?? undefined}
                currencyDisplay={component.currencyDisplay ?? undefined}
                prefix={component.inputPrefix}
                suffix={component.inputSuffix}
                min={component.min}
                max={component.max}
                step={component.step}
                showButtons={component.showButtons}
                buttonLayout={component.buttonLayout}
                incrementButtonClassName={component.incrementButtonClassName}
                decrementButtonClassName={component.decrementButtonClassName}
                incrementButtonIcon={component.incrementButtonIcon}
                decrementButtonIcon={component.decrementButtonIcon}
            />
        </BaseFieldComponent>
    );
};

export default NumberField;
