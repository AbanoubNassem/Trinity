import React, { useEffect, useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import FieldProps from '@/types/Props/Fields/FieldProps';
import RepeaterField from '@/types/Models/Fields/RepeaterField';
import { OrderList } from 'primereact/orderlist';
import { Panel, PanelHeaderTemplateOptions } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import GridLayout from '@/layouts/GridLayout';
import { BlockUI } from 'primereact/blockui';

const RepeaterField = ({ configs, resource, component, formData, record, setFieldValue, errors }: FieldProps<RepeaterField>) => {
    const [value, setValue] = useState<Array<any>>(!Array.isArray(formData[component.columnName]) ? JSON.parse(formData[component.columnName] ?? '[{}]') : formData[component.columnName]);

    useEffect(() => {
        setFieldValue(component.columnName, JSON.stringify(value));
    });
    const itemHeaderTemplate = (options: PanelHeaderTemplateOptions) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className}  ${component.isCollapsible ? 'justify-content-between' : 'justify-content-end'}`;
        const style = { zIndex: 100 };

        return (
            <div className={className}>
                {component.isCollapsible && (
                    <Button
                        icon={toggleIcon}
                        className="p-button-rounded  p-button-text"
                        style={style}
                        onClick={options.onTogglerClick}
                    />
                )}

                {options.collapsed && <div className="p-2 text-xs text-center text-gray-400">Content collapsed</div>}

                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button-text"
                    style={style}
                    onClick={(event) => {
                        event.preventDefault();
                        setValue(value.filter((item) => item !== options.props.id));
                        setFieldValue(component.columnName, JSON.stringify(value));
                    }}
                />
            </div>
        );
    };
    const itemTemplate = (item: any) => {
        const index = value.indexOf(item).toString();
        const innerErrors = Object.entries(errors)
            .filter(([key]) => key.endsWith(index))
            .reduce(
                (obj, [key, value]) => ({
                    ...obj,
                    [key.replace(`${component.columnName}.`, '').replace(`.${index}`, '')]: value
                }),
                {}
            );

        return (
            <Panel
                headerTemplate={itemHeaderTemplate}
                toggleable
                id={item}
            >
                <GridLayout
                    configs={configs}
                    resource={resource}
                    component={component as any}
                    record={record}
                    formData={item}
                    setFieldValue={(name, fieldValue) => {
                        item[name] = fieldValue;
                    }}
                    errors={innerErrors}
                    style={{ zIndex: 100 }}
                />
            </Panel>
        );
    };

    const headerTemplate = (
        <Toolbar
            end={
                <Button
                    label={`Add ${component.label}`}
                    icon="pi pi-plus"
                    iconPos="right"
                    className="p-button-sm p-button-warning"
                    onClick={(event) => {
                        event.preventDefault();
                        setValue([...value, {}]);
                        setFieldValue(component.columnName, JSON.stringify(value));
                    }}
                />
            }
        />
    );

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <BlockUI blocked={component.disabled}>
                <OrderList
                    id={component.columnName}
                    hidden={component.hidden}
                    placeholder={component.placeholder}
                    className={classNames({ 'p-invalid': errors[component.columnName] })}
                    dragdrop
                    value={value}
                    itemTemplate={itemTemplate}
                    header={headerTemplate}
                    onChange={(event) => {
                        setValue(event.value);
                        setFieldValue(component.columnName, JSON.stringify(value));
                    }}
                    onBlur={() => setFieldValue(component.columnName, JSON.stringify(value))}
                />
            </BlockUI>
        </BaseFieldComponent>
    );
};

export default RepeaterField;
