import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { AppContext } from '@/contexts/AppContext';
import { Fieldset } from 'primereact/fieldset';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import BaseLayout from '@/types/Models/Layouts/BaseLayout';

const FieldsetLayout = ({ component, formData, setFieldValue, errors }: LayoutProps<BaseLayout>) => {
    const { components } = useContext(AppContext);

    return (
        <Fieldset
            className={`col-12 md:col-${component.columnSpan}`}
            legend={component.label}
            toggleable={component.toggleable}
            collapsed={component.isToggledHiddenByDefault}
        >
            <div className={classNames(['p-fluid grid px-0 mx-0 col-12', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
                {component?.schema.map((innerComponent, index) =>
                    components?.has(innerComponent.componentName) ? (
                        components?.get(innerComponent.componentName)!({
                            key: `fieldset_${index}_${innerComponent.componentName}`,
                            component: innerComponent,
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
        </Fieldset>
    );
};

export default FieldsetLayout;
