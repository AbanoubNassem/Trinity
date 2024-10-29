import TextField from '@/fields/TextField';
import FieldProps from '@/types/Props/Fields/FieldProps';
import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';

const IdField = (props: FieldProps<TrinityFieldType>) => {
    const { component, errors, formData, setFieldValue } = props;

    return (
        <TextField
            {...props}
            component={component}
            formData={formData}
            setFieldValue={setFieldValue}
            errors={errors}
        />
    );
};

export default IdField;
