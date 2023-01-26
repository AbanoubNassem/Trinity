import React from 'react';
import { classNames } from 'primereact/utils';
import BaseField from '@/types/Models/Fields/BaseField';
import { Errors, ErrorBag } from '@inertiajs/core/types/types';

const BaseFieldComponent = ({ component, errors, children }: { component: BaseField; errors: Errors & ErrorBag; children?: React.ReactNode }) => {
    if (component.hidden) return <></>;

    return (
        <div className={classNames(['field col-12 md:col', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
            <label htmlFor={component.columnName}>{component.label}</label>

            <div className={component.prefixes || component.suffixes || component.prefixIcons || component.suffixIcons ? 'p-inputgroup' : ''}>
                {component.prefixIcons?.map((icon, index) => (
                    <span
                        className="p-inputgroup-addon"
                        key={`${index}_${icon}`}
                    >
                        <i className={icon}></i>
                    </span>
                ))}

                {component.prefixes?.map((p, index) => (
                    <span
                        className="p-inputgroup-addon"
                        key={`${index}_${p}`}
                    >
                        {p}
                    </span>
                ))}

                {children}

                {component.suffixIcons?.map((icon, index) => (
                    <span
                        className="p-inputgroup-addon"
                        key={`${index}_${icon}`}
                    >
                        <i className={icon}></i>
                    </span>
                ))}

                {component.suffixes?.map((s, index) => (
                    <span
                        className="p-inputgroup-addon"
                        key={`${index}_${s}`}
                    >
                        {s}
                    </span>
                ))}
            </div>

            <small id={`${component.columnName}-help`}>{component.helperText}</small>

            {errors[component.columnName] && (
                <div className="p-error mt-1">
                    <span className="flex">{errors[component.columnName]}</span>
                </div>
            )}
        </div>
    );
};

export default BaseFieldComponent;
