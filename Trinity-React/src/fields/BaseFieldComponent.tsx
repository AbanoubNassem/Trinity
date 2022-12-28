import React from 'react';
import { classNames } from 'primereact/utils';
import Errors from '@/Types/Models/errors';
import BaseField from '@/Types/Models/BaseField';

const BaseFieldComponent = ({ component, errors, children }: { component: BaseField; errors: Errors; children?: React.ReactNode }) => {
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

            {errors?.value[component.columnName] && (
                <div className="p-error mt-1">
                    {errors?.value[component.columnName].map((e, index) => (
                        <span
                            className="flex"
                            key={index}
                        >
                            {e}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BaseFieldComponent;
