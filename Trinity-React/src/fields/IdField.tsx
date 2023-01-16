import React from 'react';

import TextField from '@/fields/TextField';
import FieldProps from '@/types/Props/Fields/FieldProps';
import BaseField from '@/types/Models/Fields/BaseField';

const IdField = ({ component, errors, formData, setFieldValue }: FieldProps<BaseField>) => {
    return (
        <TextField
            component={component}
            formData={formData}
            setFieldValue={setFieldValue}
            errors={errors}
        />
    );
};

export default IdField;
