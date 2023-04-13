import React, { CSSProperties } from 'react';
import { classNames } from 'primereact/utils';
import TrinityField from '@/types/Models/Fields/TrinityField';
import { Errors, ErrorBag } from '@inertiajs/core/types/types';
import omit from 'lodash/omit';

const BaseFieldComponent = ({ component, errors, children, style }: { component: TrinityField; errors: Errors & ErrorBag; children?: React.ReactNode; style?: CSSProperties | undefined }) => {
    return (
        <div
            style={{ ...style, ...{ display: component.hidden || !component.visible ? 'none' : undefined } }}
            {...omit(component.extraAttributes, ['class', 'className'])}
            className={classNames(['field col-12 md:col', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''], [component.extraAttributes?.class ?? component.extraAttributes?.className])}
        >
            <label htmlFor={component.columnName}>
                {component.label}
                <sup className="font-medium text-red-700 dark:text-red-400">{component.isRequired && '*'}</sup>
            </label>

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

            <div className="p-error mt-1">
                <span className="flex">{errors[component.columnName]}</span>
            </div>
        </div>
    );
};

export default BaseFieldComponent;
