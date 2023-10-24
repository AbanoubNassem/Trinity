import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import Table from '@/components/Table';
import { useConfigs } from '@/hooks/trinity_configs';
import { classNames } from 'primereact/utils';
import trinityApp from '@/TrinityApp';
import { useLocalize } from '@/hooks/trinity_localizer';

const Index = () => {
    const { resource } = usePageProps();
    const configs = useConfigs();
    const localize = useLocalize();

    return (
        <>
            <Head title={resource?.pluralLabel}></Head>

            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>{resource?.pluralLabel}</h5>

                        <div className="grid">
                            {resource?.topWidgets?.map((w, index) =>
                                trinityApp.registeredWidgets?.has(w.componentName) ? (
                                    <div
                                        className={classNames('col-12', w.columnSpan > 0 && w.columnSpan < 12 ? `md:col-${w.columnSpan}` : 'md:col')}
                                        key={`widget_${index}_${w.componentName}`}
                                    >
                                        {trinityApp.registeredWidgets?.get(w.componentName)!({
                                            configs: configs,
                                            resource: resource,
                                            widget: w,
                                            localize
                                        })}
                                    </div>
                                ) : (
                                    <div>{localize('unknown_widget', w.componentName)}</div>
                                )
                            )}
                        </div>

                        <Table />

                        <div className="grid mt-2">
                            {resource?.bottomWidgets?.map((w, index) =>
                                trinityApp.registeredWidgets?.has(w.componentName) ? (
                                    <div
                                        className={classNames('col-12', w.columnSpan > 0 && w.columnSpan < 12 ? `md:col-${w.columnSpan}` : 'md:col')}
                                        key={`widget_${index}_${w.componentName}`}
                                    >
                                        {trinityApp.registeredWidgets?.get(w.componentName)!({
                                            configs: configs,
                                            resource: resource,
                                            widget: w,
                                            localize
                                        })}
                                    </div>
                                ) : (
                                    <div>{localize('unknown_widget', w.componentName)}</div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
