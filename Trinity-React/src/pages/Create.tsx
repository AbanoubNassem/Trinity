import React, { useContext, useEffect, useState } from 'react';
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

const Create = () => {
    const configs = useConfigs();
    const { resource, errors, data: inserted } = usePageProps();
    const fields = useTrinityFields();
    const { components } = useContext(AppContext);
    const [createAddAnother, setCreateAddAnother] = useState(false);

    const data = {} as any;
    for (const field of fields) {
        data[last(field.columnName.split('.'))!] = undefined;
    }
    const form = useForm();

    useEffect(() => {
        if (inserted) {
            trinityLink(`/${configs?.prefix}/${resource?.name}/edit/${inserted}`, false, false);
        }
    }, [inserted]);

    const setFieldValue = (name: string, value: any) => {
        data[name] = value;
    };

    const create = (_createAddAnother: boolean = false) => {
        setCreateAddAnother(_createAddAnother);
        form.setDefaults(data);
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

export default Create;
