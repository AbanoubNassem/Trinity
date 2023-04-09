import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { Fieldset } from 'primereact/fieldset';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';
import trinityApp from '@/TrinityApp';

const FieldsetLayout = ({ configs, resource, component, record, formData, setFieldValue, errors, localize }: LayoutProps<TrinityLayout>) => {
    return (
        <Fieldset
            className={`col-12 md:col-${component.columnSpan}`}
            legend={component.label}
            toggleable={component.toggleable}
            collapsed={component.isToggledHiddenByDefault}
            style={component.style}
        >
            <div className={classNames(['p-fluid grid px-0 mx-0 col-12', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
                {component?.schema.map((innerComponent, index) =>
                    trinityApp.registeredComponents?.has(innerComponent.componentName) ? (
                        <div
                            key={`${component.componentName}_${index}_${innerComponent.componentName}`}
                            className={component.columns ? `md:col-${12 / component.columns}` : 'col'}
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
                        <div key={`form_${index}_${innerComponent.componentName}`}></div>
                    )
                )}
            </div>
        </Fieldset>
    );
};

export default FieldsetLayout;
