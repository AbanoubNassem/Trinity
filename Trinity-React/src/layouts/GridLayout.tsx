import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import LayoutProps from '@/Types/Props/LayoutProps';
import BaseLayout from '@/Types/Models/BaseLayout';
import { AppContext } from '@/contexts/AppContext';

const GirdLayout = ({ component, formData, setFieldValue, errors }: LayoutProps<BaseLayout>) => {
    const { components } = useContext(AppContext);

    return (
        <div className={classNames(['p-fluid grid px-0 mx-0 col-12', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
            {component?.schema.map((innerComponent, index) =>
                components?.has(innerComponent.componentName) ? (
                    components?.get(innerComponent.componentName)!({
                        key: `grid_${index}_${innerComponent.componentName}`,
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
    );
};

export default GirdLayout;
