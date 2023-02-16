import React, { useContext, useEffect, useMemo, useState } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useConfigs } from '@/hooks/trinity_configs';
import { trinityLink } from '@/utilities/trinity_link';
import { AppContext } from '@/contexts/AppContext';

import { useTrinityFields } from '@/hooks/trinity_resource_fields';
import last from 'lodash/last';
import { useForm, router } from '@inertiajs/react';

const Create = () => {
    const configs = useConfigs();
    const { resource, errors, data: inserted } = usePageProps();
    const fields = useTrinityFields();
    const { components } = useContext(AppContext);
    const [createAddAnother, setCreateAddAnother] = useState(false);

    let data = useMemo<{ [k: string]: any }>(() => {
        let innerData = {} as any;
        for (const field of fields) {
            innerData[last(field.columnName.split('.'))!] = undefined;
        }
        return innerData;
    }, [configs]);

    const form = useForm(data);

    useEffect(() => {
        if (inserted) {
            if (!createAddAnother) {
                trinityLink(`/${configs?.prefix}/${resource?.name}/edit/${inserted}`, false, false);
            } else {
                router.get('');
            }
        }
    }, [inserted]);

    const setFieldValue = (name: string, value: any) => {
        data[name] = value;
    };

    const create = (_createAddAnother: boolean = false) => {
        form.setData(data);
        setCreateAddAnother(_createAddAnother);
        form.post('', {
            preserveScroll: true,
            preserveState: true
        });
    };

    const toolbarRight = (
        <div className="grid">
            <Button
                label="Create"
                className="m-2 p-button-primary"
                disabled={form.processing}
                loading={form.processing && !createAddAnother}
                onClick={() => create(false)}
            />
            <Button
                label="Create & create another"
                className="m-2 p-button-help"
                disabled={form.processing}
                loading={form.processing && createAddAnother}
                onClick={() => create(true)}
            />
            <Button
                label="Cancel"
                className="m-2 p-button-secondary"
                onClick={() => trinityLink(`/${configs.prefix}/${resource?.name}`)}
            />
        </div>
    );

    return (
        <>
            <Head title={`Create - ${resource?.pluralLabel}`}></Head>

            <div className="card">
                <h5 className="mb-6">Create {resource?.pluralLabel}</h5>

                <form className="p-fluid formgrid grid col-12">
                    {resource?.schema?.map((component, index) =>
                        components?.has(component.componentName) ? (
                            components?.get(component.componentName)!({
                                key: `form_${index}_${component.componentName}`,
                                configs: configs,
                                resource: resource,
                                component,
                                record: {},
                                formData: data,
                                setFieldValue,
                                errors
                            })
                        ) : (
                            <div key={`form_${index}_${component.componentName}`}></div>
                        )
                    )}
                </form>

                <div className="mt-3">
                    <Toolbar end={toolbarRight} />
                </div>
            </div>
        </>
    );
};

export default React.memo(Create);
