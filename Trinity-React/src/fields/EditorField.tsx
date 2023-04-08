import React, { useRef, useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import EditorField from '@/types/Models/Fields/EditorField';
import { Editor } from 'primereact/editor';

const EditorField = ({ component, formData, setFieldValue, errors }: FieldProps<EditorField>) => {
    const [value, setValue] = useState(formData[component.columnName]);
    const editorRef = useRef<Editor>(null);

    let header = null;
    if (component.headerButtons) {
        header = (
            <span
                className="ql-formats"
                style={{ zIndex: 400 }}
            >
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
            style={{ zIndex: 200 }}
        >
            <Editor
                ref={editorRef}
                onLoad={(quill) => {
                    const imageButton = quill.getModule('toolbar').container.querySelector('.ql-image');
                    if (imageButton) {
                        imageButton.parentNode?.removeChild(imageButton);
                    }
                }}
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                hidden={component.hidden}
                required={component.isRequired}
                placeholder={component.placeholder}
                className={classNames({ 'p-invalid': errors[component.columnName] })}
                value={value}
                onTextChange={(e) => {
                    setFieldValue(component.columnName, e.htmlValue);
                    setValue(e.htmlValue);
                }}
                style={{ height: component.height, zIndex: 300 }}
                headerTemplate={header}
                modules={component.modules}
                maxLength={component.maxLength}
            />
        </BaseFieldComponent>
    );
};

export default EditorField;
