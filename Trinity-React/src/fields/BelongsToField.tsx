import React, { useEffect, useLayoutEffect, useState } from 'react';
import FieldProps from '@/Types/Props/FieldProps';
import SelectInputField from '@/fields/SelectInputField';
import axios from 'axios';
import { useConfigs } from '@/hooks/trinity_configs';
import usePageProps from '@/hooks/trinity_page_props';
import { SelectItemOptionsType } from 'primereact/selectitem';
import RelationshipField from '@/Types/Models/RelationshipField';
import { VirtualScrollerLazyParams } from 'primereact/virtualscroller';

const BelongsToField = (props: FieldProps<RelationshipField>) => {
    const { component, errors, form } = props;
    const configs = useConfigs();
    const { resource } = usePageProps();
    const [options, setOptions] = useState<SelectItemOptionsType>([]);

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
            });
    }, [component]);

    return (
        <SelectInputField
            component={component}
            errors={errors}
            search={fetchAssociates}
            lazy={component.lazy}
            form={form}
            options={options}
        />
    );
};

export default BelongsToField;
