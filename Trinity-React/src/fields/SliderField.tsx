import React, { useState } from 'react';

import FieldProps from '@/types/Props/Fields/FieldProps';
import SliderField from '@/types/Models/Fields/SliderField';
import { Slider } from 'primereact/slider';
import { classNames } from 'primereact/utils';
import BaseFieldComponent from '@/fields/BaseFieldComponent';

const SliderField = ({ component, errors, formData, setFieldValue }: FieldProps<SliderField>) => {
    const [value, setValue] = useState<number | [number, number]>(formData[component.columnName] ?? (component.range === true ? [component.min, component.max] : component.min));

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <span>{component.range === true ? `[${(value as any)[0]}, ${(value as any)[1]}]` : `[${value}]`}</span>

            <Slider
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                className={classNames('mt-3', { 'p-invalid': errors[component.columnName] })}
                value={value}
                onChange={(e) => {
                    setValue(e.value);
                    setFieldValue(component.columnName, e.value);
                }}
                min={component.min}
                max={component.max}
                step={component.step}
                range={component.range}
                orientation={component.orientation}
            />
        </BaseFieldComponent>
    );
};

export default SliderField;
