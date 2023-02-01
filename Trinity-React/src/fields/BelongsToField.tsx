import React, { useLayoutEffect, useState } from 'react';

import SelectInputField from '@/fields/SelectInputField';
import axios from 'axios';
import { useConfigs } from '@/hooks/trinity_configs';
import usePageProps from '@/hooks/trinity_page_props';
import { SelectItemOptionsType } from 'primereact/selectitem';

import { VirtualScrollerLazyEvent } from 'primereact/virtualscroller';
import last from 'lodash/last';
import modal from '@/utilities/inertia_modal';
import FieldProps from '@/types/Props/Fields/FieldProps';
import RelationshipField from '@/types/Models/Fields/RelationshipField';

const BelongsToField = (props: FieldProps<RelationshipField>) => {
    const { component, errors, formData, setFieldValue } = props;
    const configs = useConfigs();
    const { resource, data } = usePageProps<any>();
    const [options, setOptions] = useState<SelectItemOptionsType>([]);

    let relation = data;
    for (const r of component.relationshipName?.split('.') ?? []) {
        if (relation && relation[r]) relation = relation[r];
    }

    async function fetchAssociates(
        e:
            | (VirtualScrollerLazyEvent & {
                  filter: string;
                  value: any;
              })
            | null
    ): Promise<SelectItemOptionsType> {
        const res = await axios
            .get(`/${configs.prefix}/${resource?.name}/relationship`, {
                params: {
                    column: component.columnName,
                    search: e?.filter,
                    offset: e?.last as number,
                    value: e?.value
                }
            })
            .then((res) => res.data)
            .catch((err) => modal.show(err.response.data, false));

        return res ?? [];
    }

    useLayoutEffect(() => {
        if (!component.lazy)
            fetchAssociates(null).then((opts) => {
                setOptions(opts);
            });
    }, [component]);

    return (
        <SelectInputField
            {...props}
            component={component}
            errors={errors}
            search={fetchAssociates}
            lazy={component.lazy}
            lazyItemsCount={component.lazyItemsCount}
            formData={formData}
            setFieldValue={(name, value) => {
                setFieldValue(name, String(value));
            }}
            options={options}
            value={relation ? relation[last(component.foreignColumn?.split('.'))!]?.toString() : undefined}
        />
    );
};

export default BelongsToField;
