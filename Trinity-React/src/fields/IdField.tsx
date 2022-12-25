import React from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import BaseField from '@/Types/Models/BaseField';
import TextField from '@/fields/TextField';

const IdField = ({ component, errors, form }: FieldProps<BaseField>) => {
    return (
        <TextField
            component={component}
            form={form}
            errors={errors}
        />
    );
};

export default IdField;
