import React from 'react';
import { classNames } from 'primereact/utils';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';
import trinityApp from '@/TrinityApp';
import BaseFieldComponent from '@/fields/BaseFieldComponent';

const GirdLayout = ({ configs, resource, component, record, formData, setFieldValue, errors, style, localize }: LayoutProps<TrinityLayout>) => {
    return (
        <div
            style={style}
            className={classNames(['p-fluid grid grid-nogutter px-0 mx-0 col-12', component?.columnSpan > 0 && component?.columnSpan < 12 ? `md:col-${component?.columnSpan}` : ''])}
        >
            {component?.schema.map((innerComponent, index) =>
                trinityApp.registeredComponents?.has(innerComponent.componentName) ? (
                    <div
                        key={`${component.componentName}_${index}_${innerComponent.componentName}`}
                        className={classNames('col-12', component.columns ? `md:col-${12 / component.columns}` : 'md:col')}
                    >
                        {trinityApp.registeredComponents?.get(innerComponent.componentName)!({
                            configs: configs,
                            resource: resource,
                            component: innerComponent,
                            record: record,
                            formData,
                            setFieldValue,
                            errors,
                            localize
                        })}
                    </div>
                ) : (
                    <div
                        key={`form_${index}_${innerComponent.componentName}`}
                        className={classNames('col-12', component.columns ? `md:col-${12 / component.columns}` : 'md:col')}
                    />
                )
            )}
        </div>
    );
};

export default GirdLayout;
