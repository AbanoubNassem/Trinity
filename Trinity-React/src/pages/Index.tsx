import React, { useContext } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Head } from '@/components/Head';
import Table from '@/components/Table';
import { AppContext } from '@/contexts/AppContext';
import { useConfigs } from '@/hooks/trinity_configs';
import { classNames } from 'primereact/utils';

const Index = () => {
    const { resource } = usePageProps();
    const { widgets } = useContext(AppContext);
    const configs = useConfigs();

    return (
        <>
            <Head title={resource?.pluralLabel}></Head>

            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>{resource?.pluralLabel}</h5>

                        <div className="grid">
                            {resource?.topWidgets?.map((w, index) =>
                                widgets?.has(w.componentName) ? (
                                    <div
                                        className={classNames('col-12', w.columnSpan > 0 && w.columnSpan < 12 ? `md:col-${w.columnSpan}` : 'md:col')}
                                        key={`widget_${index}_${w.componentName}`}
                                    >
                                        {widgets?.get(w.componentName)!({
                                            configs: configs,
                                            resource: resource,
                                            widget: w
                                        })}
                                    </div>
                                ) : (
                                    <div>Unknown Widget</div>
                                )
                            )}
                        </div>

                        <Table />

                        <div className="grid">
                            {resource?.bottomWidgets?.map((w, index) =>
                                widgets?.has(w.componentName) ? (
                                    <div
                                        className={classNames('col-12', w.columnSpan > 0 && w.columnSpan < 12 ? `md:col-${w.columnSpan}` : 'md:col')}
                                        key={`widget_${index}_${w.componentName}`}
                                    >
                                        {widgets?.get(w.componentName)!({
                                            configs: configs,
                                            resource: resource,
                                            widget: w
                                        })}
                                    </div>
                                ) : (
                                    <div>Unknown Widget</div>
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
