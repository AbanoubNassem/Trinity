import { memo, useEffect, useMemo, useRef, useState } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { useConfigs } from '@/hooks/trinity_configs';
import { trinityLink } from '@/utilities/trinity_link';

import { useTrinityFields } from '@/hooks/trinity_resource_fields';
import last from 'lodash/last';
import { useForm, router } from '@inertiajs/react';
import trinityApp from '@/TrinityApp';
import { useLocalize } from '@/hooks/trinity_localizer';

const Create = () => {
    const configs = useConfigs();
    const localize = useLocalize();
    const { resource, errors, data: inserted } = usePageProps();
    const fields = useTrinityFields();
    const [createAddAnother, setCreateAddAnother] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    let data = useMemo<{ [k: string]: any }>(() => {
        let innerData = {} as any;
        for (const field of fields) {
            innerData[last(field.columnName.split('.'))!] = field.defaultValue;
        }
        return innerData;
    }, [configs]);

    const form = useForm(data);

    useEffect(() => {
        if (inserted) {
            if (!createAddAnother) {
                trinityLink(`${configs?.prefix}/${resource?.name}/edit/${inserted}`, false, false);
            } else {
                router.get('');
            }
        }
    }, [inserted]);

    const setFieldValue = (name: string, value: any) => {
        data[name] = value;
    };

    const create = () => {
        form.setData(data);

        form.post('', {
            method: 'post',
            preserveScroll: true,
            preserveState: true
        });
    };

    const toolbarRight = (
        <div className="grid">
            <Button
                label={localize('create')}
                type={'submit'}
                className="m-2 p-button-primary"
                disabled={form.processing}
                loading={form.processing && !createAddAnother}
                onClick={() => {
                    setCreateAddAnother(false);
                    formRef.current?.requestSubmit();
                }}
            />
            <Button
                label={localize('create_and_another')}
                type={'submit'}
                className="m-2 p-button-help"
                disabled={form.processing}
                loading={form.processing && createAddAnother}
                onClick={() => {
                    setCreateAddAnother(true);
                    formRef.current?.requestSubmit();
                }}
            />
            <Button
                label={localize('cancel')}
                className="m-2 p-button-secondary"
                onClick={() => trinityLink(`${configs.prefix}/${resource?.name}`)}
            />
        </div>
    );

    return (
        <>
            <Head title={`${localize('create')} - ${resource?.pluralLabel}`}></Head>

            <div className="card">
                <h5 className="mb-6">
                    {localize('create')} {resource?.pluralLabel}
                </h5>

                <form
                    ref={formRef}
                    className="p-fluid formgrid grid col-12"
                    onSubmit={(e) => {
                        e.preventDefault();
                        create();
                    }}
                >
                    {resource?.schema?.map((component, index) =>
                        trinityApp.registeredComponents?.has(component.componentName) ? (
                            trinityApp.registeredComponents?.get(component.componentName)!({
                                key: `form_${index}_${component.componentName}`,
                                configs: configs,
                                resource: resource,
                                component,
                                record: {},
                                formData: data,
                                setFieldValue,
                                errors,
                                localize
                            })
                        ) : (
                            <div key={`form_${index}_${component.componentName}`}> {`Unknown Component ${component.componentName}`}</div>
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

export default memo(Create);
