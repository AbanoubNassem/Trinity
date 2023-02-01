import React from 'react';

import TextField from '@/fields/TextField';
import FieldProps from '@/types/Props/Fields/FieldProps';
import BaseField from '@/types/Models/Fields/BaseField';

const IdField = (props: FieldProps<BaseField>) => {
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
