import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { AppContext } from '@/contexts/AppContext';

import { Panel } from 'primereact/panel';

import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';

const PanelLayout = ({ configs, resource, component, record, formData, setFieldValue, errors }: LayoutProps<TrinityLayout>) => {
    const { components } = useContext(AppContext);

    return (
        <Panel
            className={`col-12 md:col-${component.columnSpan}`}
            header={component.label}
            toggleable={component.toggleable}
            collapsed={component.isToggledHiddenByDefault}
            style={{ ...{ marginBottom: '2rem' }, ...component.style }}
        >
            <div className={classNames(['p-fluid grid px-0 mx-0 col-12', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
                {component?.schema.map((innerComponent, index) =>
                    components?.has(innerComponent.componentName) ? (
                        components?.get(innerComponent.componentName)!({
                            key: `fieldset_${index}_${innerComponent.componentName}`,
                            configs: configs,
                            resource: resource,
                            component: innerComponent,
                            record: record,
                            containerClass: component.columns ? `md:col-${12 / component.columns}` : '',
                            formData,
                            setFieldValue,
                            errors
                        })
                    ) : (
                        <div key={`form_${index}_${innerComponent.componentName}`}></div>
                    )
                )}
            </div>
        </Panel>
    );
};

export default PanelLayout;
