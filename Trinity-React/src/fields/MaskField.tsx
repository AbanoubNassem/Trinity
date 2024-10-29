import { classNames } from 'primereact/utils';
import { InputMask } from 'primereact/inputmask';
import FieldProps from '@/types/Props/Fields/FieldProps';
import MaskFieldType from '@/types/Models/Fields/MaskFieldType';

const MaskField = ({ component, formData, setFieldValue, errors }: FieldProps<MaskFieldType>) => {
    return (
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
    );
};

export default MaskField;
