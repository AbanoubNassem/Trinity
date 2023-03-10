import { useConfigs } from '@/hooks/trinity_configs';
import { classNames } from 'primereact/utils';
import React from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';
import trinityApp from '@/TrinityApp';
import { Head } from '@/components/Head';
import TrinityPage from '@/types/Models/Pages/TrinityPage';

const Default = () => {
    const configs = useConfigs();
    const page = usePageProps().page as TrinityPage;

    return (
        <>
            <Head title={page.label ?? page.pageName}></Head>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>{page.label ?? page.pageName}</h5>
                        <div className="grid">
                            {page.schema?.map((w: TrinityWidget, index: number) =>
                                trinityApp.registeredWidgets?.has(w.componentName) ? (
                                    <div
                                        className={classNames('col-12 md:col-6', w.columnSpan > 0 && w.columnSpan < 12 ? `lg:col-${w.columnSpan}` : 'lg:col-4')}
                                        key={`widget_${index}_${w.componentName}`}
                                    >
                                        {trinityApp.registeredWidgets?.get(w.componentName)!({
                                            configs: configs,
                                            widget: w
                                        })}
                                    </div>
                                ) : (
                                    <div>Unknown Widget {w.componentName}</div>
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
