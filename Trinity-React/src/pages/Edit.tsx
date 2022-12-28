import React, { useContext, useEffect, useMemo } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useConfigs } from '@/hooks/trinity_configs';
import { trinityLink } from '@/utilities/trinity_link';
import { AppContext } from '@/contexts/AppContext';
import { useForm } from '@inertiajs/inertia-react';
import { useTrinityFields } from '@/hooks/trinity_resource_fields';
import last from 'lodash/last';

const Edit = () => {
    const configs = useConfigs();
    const { resource, errors, data: record } = usePageProps<any>();
    const fields = useTrinityFields();
    const { components } = useContext(AppContext);

    const data = useMemo<any>(() => {
        let innerData = {} as any;
        for (const field of fields) {
            innerData[last(field.columnName.split('.'))!] = record[last(field.columnName.split('.'))!] ?? '';
        }
        return innerData;
    }, [configs]);

    const form = useForm<any>(data);

    const setFieldValue = (name: string, value: any) => {
        data[name] = value;
    };

    const update = () => {
        // console.log(data);
        form.setDefaults(data);
        form.reset();
        console.log(form.data);
        // form.reset();
        // console.log(form.data);
        // // form.reset();
        form.put('', {
            preserveScroll: true,
            preserveState: true
        });
    };
    // useEffect(() => {
    //     if (inserted) {
    //         trinityLink(`/${configs?.prefix}/${resource?.name}/edit/${inserted}`, false, false);
    //     }
    // }, [inserted]);

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
    console.log('render');
    return (
        <>
            <Head title={resource?.pluralLabel}></Head>

            <div className="card">
                <h5 className="mb-6">Create {resource?.pluralLabel}</h5>

                <form className="p-fluid formgrid grid col-12">
                    {resource?.schema.map((component, index) =>
                        components?.has(component.componentName) ? (
                            components?.get(component.componentName)!({
                                key: `form_${index}_${component.componentName}`,
                                component,
                                formData: data,
                                setFieldValue,
                                errors
                            })
                        ) : (
                            <div key={`form_${index}_${component.componentName}`}></div>
                        )
                    )}
                </form>

                <div className="grid">
                    <div className="field">
                        {errors?.value[''] && (
                            <small className="p-error">
                                {errors?.value[''].map((e, index) => (
                                    <span
                                        className="flex"
                                        key={index}
                                    >
                                        {e}
                                    </span>
                                ))}
                            </small>
                        )}
                    </div>
                </div>

                <div className="mt-3">
                    <Toolbar right={toolbarRight} />
                </div>
            </div>
        </>
    );
};

export default React.memo(Edit);
