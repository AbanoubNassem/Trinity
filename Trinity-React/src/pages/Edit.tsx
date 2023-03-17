import React, { useMemo } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useConfigs } from '@/hooks/trinity_configs';
import { trinityLink } from '@/utilities/trinity_link';
import { useForm } from '@inertiajs/react';
import { useTrinityFields } from '@/hooks/trinity_resource_fields';
import last from 'lodash/last';
import trinityApp from '@/TrinityApp';
import { useLocalize } from '@/hooks/trinity_localizer';

const Edit = () => {
    const configs = useConfigs();
    const localize = useLocalize();
    const { resource, errors, data: record } = usePageProps<any>();
    const fields = useTrinityFields();

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
                label={localize('update')}
                className="m-2 p-button-info"
                disabled={form.processing}
                loading={form.processing}
                onClick={() => update()}
            />
            <Button
                label={localize('cancel')}
                className="m-2 p-button-secondary"
                onClick={() => trinityLink(`/${configs.prefix}/${resource?.name}`)}
            />
        </div>
    );

    return (
        <>
            <Head title={`${localize('edit')} - ${record[resource?.titleColumn ?? resource?.primaryKeyColumn ?? 'id']}`}></Head>

            <div className="card">
                <h5 className="mb-6">
                    {localize('edit')} {resource?.pluralLabel}
                </h5>

                <form className="p-fluid formgrid grid col-12">
                    {resource?.schema?.map((component, index) =>
                        trinityApp.registeredComponents?.has(component.componentName) ? (
                            trinityApp.registeredComponents?.get(component.componentName)!({
                                key: `form_${index}_${component.componentName}`,
                                configs,
                                resource,
                                component,
                                record,
                                formData: data,
                                setFieldValue,
                                errors,
                                localize
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
