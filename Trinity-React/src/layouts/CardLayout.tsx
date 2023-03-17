import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';
import trinityApp from '@/TrinityApp';

const CardLayout = ({ configs, resource, component, record, formData, setFieldValue, errors, localize }: LayoutProps<TrinityLayout>) => {
    return (
        <Card
            className={`col-12 md:col-${component.columnSpan}`}
            title={component.label}
            style={{ ...{ marginBottom: '2rem' }, ...component.style }}
        >
            <div className={classNames(['p-fluid grid px-0 mx-0 col-12', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
                {component?.schema.map((innerComponent, index) =>
                    trinityApp.registeredComponents?.has(innerComponent.componentName) ? (
                        trinityApp.registeredComponents?.get(innerComponent.componentName)!({
                            key: `fieldset_${index}_${innerComponent.componentName}`,
                            configs: configs,
                            resource: resource,
                            component: innerComponent,
                            record: record,
                            containerClass: component.columns ? `md:col-${12 / component.columns}` : '',
                            formData,
                            setFieldValue,
                            errors,
                            localize
                        })
                    ) : (
                        <div key={`form_${index}_${innerComponent.componentName}`}></div>
                    )
                )}
            </div>
        </Card>
    );
};

export default CardLayout;
