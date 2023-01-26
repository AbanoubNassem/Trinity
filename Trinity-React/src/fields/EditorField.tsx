import React, { useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import EditorField from '@/types/Models/Fields/EditorField';
import { Editor } from 'primereact/editor';

const EditorField = ({ component, formData, setFieldValue, errors }: FieldProps<EditorField>) => {
    const [value, setValue] = useState(formData[component.columnName]);

    let header = null;
    if (component.headerButtons) {
        header = (
            <span className="ql-formats">
                {component.headerButtons.map((button) => (
                    <button
                        key={button}
                        className={button}
                    ></button>
                ))}
            </span>
        );
    }

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <Editor
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors[component.columnName] })}
                value={value}
                onTextChange={(e) => {
                    setFieldValue(component.columnName, e.htmlValue);
                    setValue(e.htmlValue);
                }}
                style={{ height: component.height }}
                headerTemplate={header}
                modules={component.modules}
                maxLength={component.maxLength}
            />
        </BaseFieldComponent>
    );
};

export default EditorField;
