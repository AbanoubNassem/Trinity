import { useState } from 'react';
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import FieldProps from '@/types/Props/Fields/FieldProps';
import NumberFieldType from '@/types/Models/Fields/NumberFieldType';

const NumberField = ({ component, formData, setFieldValue, errors }: FieldProps<NumberFieldType>) => {
    const [value, setValue] = useState(formData[component.columnName]);

    return (
        <InputNumber
            id={component.columnName}
            name={component.columnName}
            disabled={component.disabled}
            hidden={component.hidden}
            placeholder={component.placeholder}
            required={component.isRequired}
            className={classNames({ 'p-invalid': errors[component.columnName] })}
            tooltip={component.tooltip}
            tooltipOptions={{ event: 'hover', position: 'top' }}
            value={value}
            onValueChange={(event) => {
                setValue(event.value);
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
    );
};

export default NumberField;
