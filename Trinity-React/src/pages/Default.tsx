import { useConfigs } from '@/hooks/trinity_configs';
import { classNames } from 'primereact/utils';

import usePageProps from '@/hooks/trinity_page_props';
import trinityApp from '@/TrinityApp';
import { Head } from '@/components/Head';
import { useLocalize } from '@/hooks/trinity_localizer';
import TrinityComponentType from '@/types/Models/TrinityComponentType.ts';

const Default = () => {
    const configs = useConfigs();
    const { page, errors, data: record } = usePageProps();
    const localize = useLocalize();

    //TODO:: do forms the right way
    let data: any = record;
    // const data = useMemo<{ [k: string]: any }>(() => {
    //     let innerData = {} as any;
    //     for (const field of page?.schema??[]) {
    //         innerData[last(field.columnName.split('.'))!] = record[last(field.columnName.split('.'))!];
    //     }
    //     return innerData;
    // }, [configs]);
    //
    // const form = useForm(data);

    const setFieldValue = (name: string, value: any) => {
        data[name] = value;
    };

    return (
        <>
            <Head title={page?.label ?? page?.slug}></Head>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>{page?.label ?? page?.slug}</h5>
                        <div className="grid">
                            {page?.schema?.map((component: TrinityComponentType, index: number) =>
                                trinityApp.registeredComponents?.has(component.componentName) ? (
                                    <div
                                        className={classNames('col-12 md:col-6', component.columnSpan > 0 && component.columnSpan < 12 ? `lg:col-${component.columnSpan}` : 'lg:col-4')}
                                        key={`${page?.slug ?? 'page'}_${index}_${component.componentName}`}
                                    >
                                        {trinityApp.registeredComponents?.get(component.componentName)!({
                                            configs: configs,
                                            widget: component,
                                            localize,
                                            component,
                                            page,

                                            formData: data,
                                            setFieldValue,
                                            errors
                                        })}
                                    </div>
                                ) : (
                                    <div>{localize('unknown_widget', component.componentName)}</div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Default;
