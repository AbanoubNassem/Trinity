import React from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import BaseField from '@/Types/Models/BaseField';
import TextField from '@/fields/TextField';

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
