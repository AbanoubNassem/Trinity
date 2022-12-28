import React, { useLayoutEffect, useState } from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import SelectInputField from '@/fields/SelectInputField';
import axios from 'axios';
import { useConfigs } from '@/hooks/trinity_configs';
import usePageProps from '@/hooks/trinity_page_props';
import { SelectItemOptionsType } from 'primereact/selectitem';
import RelationshipField from '@/Types/Models/RelationshipField';
import { VirtualScrollerLazyParams } from 'primereact/virtualscroller';
import last from 'lodash/last';

const BelongsToField = (props: FieldProps<RelationshipField>) => {
    const { component, errors, formData, setFieldValue } = props;
    const configs = useConfigs();
    const { resource, data } = usePageProps<any>();
    const [options, setOptions] = useState<SelectItemOptionsType>([]);

    let relation = data;
    for (const r of component.relationshipName?.split('.') ?? []) {
        if (relation && relation[r]) relation = relation[r];
    }

    async function fetchAssociates(e: (VirtualScrollerLazyParams & { filter: string }) | null): Promise<SelectItemOptionsType> {
        const res = await axios
            .get(`/${configs.prefix}/${resource?.name}/relationship`, {
                params: {
                    column: component.columnName,
                    search: e?.filter
                }
            })
            .then((res) => res.data);

        return res ?? [];
    }

    useLayoutEffect(() => {
        if (!component.lazy)
            fetchAssociates(null).then((opts) => {
                setOptions(opts);
                console.log(opts);
            });
    }, [component]);

    return (
        <SelectInputField
            component={component}
            errors={errors}
            search={fetchAssociates}
            lazy={component.lazy}
            formData={formData}
            setFieldValue={setFieldValue}
            options={options}
            value={relation ? relation[last(component.foreignColumn?.split('.'))!].toString() : undefined}
        />
    );
};

export default BelongsToField;
