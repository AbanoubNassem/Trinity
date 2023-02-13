import React, { useContext, useMemo } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useConfigs } from '@/hooks/trinity_configs';
import { trinityLink } from '@/utilities/trinity_link';
import { AppContext } from '@/contexts/AppContext';
import { router, useForm } from '@inertiajs/react';
import { useTrinityFields } from '@/hooks/trinity_resource_fields';
import last from 'lodash/last';

const Edit = () => {
    const configs = useConfigs();
    const { resource, errors, data: record } = usePageProps<any>();
    const fields = useTrinityFields();
    const { components } = useContext(AppContext);

    const data = useMemo<{ [k: string]: any }>(() => {
        let innerData = {} as any;
        for (const field of fields) {
            innerData[last(field.columnName.split('.'))!] = record[last(field.columnName.split('.'))!];
        }
        return innerData;
    }, [configs]);

    const form = useForm(data);

    const setFieldValue = (name: string, value: any) => {
        data[name] = value;
    };

    const update = () => {
        form.setData(data);
        form.put('', {
            preserveScroll: true,
            preserveState: true
        });
    };

    const toolbarRight = (
        <div className="grid">
            <Button
                label="Update"
                className="m-2 p-button-info"
                disabled={form.processing}
                loading={form.processing}
                onClick={() => update()}
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
            <Head title={`Edit - ${record[resource?.titleColumn ?? resource?.primaryKeyColumn ?? 'id']}`}></Head>

            <div className="card">
                <h5 className="mb-6">Create {resource?.pluralLabel}</h5>

                <form className="p-fluid formgrid grid col-12">
                    {resource?.schema?.map((component, index) =>
                        components?.has(component.componentName) ? (
                            components?.get(component.componentName)!({
                                key: `form_${index}_${component.componentName}`,
                                configs,
                                resource,
                                component,
                                record,
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

export default React.memo(Edit);
