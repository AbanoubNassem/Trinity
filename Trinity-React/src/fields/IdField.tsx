import React from 'react';

import TextField from '@/fields/TextField';
import FieldProps from '@/types/Props/Fields/FieldProps';
import TrinityField from '@/types/Models/Fields/TrinityField';

const IdField = (props: FieldProps<TrinityField>) => {
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
