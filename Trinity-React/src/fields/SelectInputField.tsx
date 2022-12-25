import React, { useEffect, useMemo, useRef, useState } from 'react';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import { classNames } from 'primereact/utils';
import { Dropdown, DropdownProps } from 'primereact/dropdown';

import SelectFieldProps from '@/Types/Props/SelectFieldProps';
import debounce from 'lodash/debounce';
import { VirtualScrollerLazyParams } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import last from 'lodash/last';
import { MultiSelect, MultiSelectProps } from 'primereact/multiselect';

const EMPTY = [
    {
        key: '',
        value: ''
    }
];
const SelectInputField = (props: SelectFieldProps) => {
    const { component, errors, search, lazy, form } = props;
    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState(form?.data[component.columnName]);
    const getItems = () => (!!props.options?.length ? props.options : !!component.options?.length ? component.options : EMPTY);
    const [options, setOptions] = useState(getItems);

    useEffect(() => {
        setOptions(getItems);
    }, [props.options]);
    const loadItems = async (e: VirtualScrollerLazyParams & { filter: string }) => {
        if (fetching || !search) return;
        setFetching(true);
        const res = await search(e);
        setOptions(!!res.length ? res : EMPTY);
        setFetching(false);
    };
    const filter = debounce(async (filter: string) => {
        if (lazy && !options.find((el) => el.label?.toLowerCase().includes(filter.toLowerCase())) && search) {
            await loadItems({ filter } as any);
        }
    }, 300);

    const fieldProps: MultiSelectProps | DropdownProps = {
        id: component.columnName,
        name: last(component.columnName.split('.')),
        disabled: component.disabled,
        placeholder: component.placeholder,
        panelClassName: 'trinity-dropdown',
        className: classNames({ 'p-invalid': errors?.value[component.columnName] }),
        tooltip: component.toolTip,
        tooltipOptions: { event: 'focus', position: 'top' },
        options: options,
        optionLabel: 'value',
        optionValue: 'key',
        filter: component.searchable || lazy,
        filterPlaceholder: component.searchPlaceholder,
        showClear: true,
        filterMatchMode: 'contains',
        value: value,
        onChange: (e: any) => {
            setValue(e.value);
            form?.setData(component.columnName, e.value);
        },
        onFilter: (e: any) => filter(e.filter),
        virtualScrollerOptions: {
            lazy: lazy,
            loading: fetching,
            showLoader: true,
            itemSize: options.length,
            items: options,
            delay: 250,
            loadingTemplate: (options: any) => (
                <div
                    className="flex align-items-center p-2"
                    style={{ height: '38px' }}
                >
                    <Skeleton
                        width={options.even ? '80%' : '90%'}
                        height="1rem"
                    />
                </div>
            ),
            onLazyLoad: loadItems
        }
    };
    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            {component.multiple ? (
                <MultiSelect
                    {...(fieldProps as any)}
                    selectionLimit={component.selectionLimit}
                    display={component.display}
                />
            ) : (
                <Dropdown {...(fieldProps as any)} />
            )}
        </BaseFieldComponent>
    );
};

export default SelectInputField;
