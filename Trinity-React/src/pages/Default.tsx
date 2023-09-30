import { useConfigs } from '@/hooks/trinity_configs';
import { classNames } from 'primereact/utils';
import React from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';
import trinityApp from '@/TrinityApp';
import { Head } from '@/components/Head';
import { useLocalize } from '@/hooks/trinity_localizer';

const Default = () => {
    const configs = useConfigs();
    const { page } = usePageProps();
    const localize = useLocalize();

    return (
        <>
            <Head title={page?.label ?? page?.slug}></Head>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>{page?.label ?? page?.slug}</h5>
                        <div className="grid">
                            {page?.schema?.map((w: TrinityWidgetType, index: number) =>
                                trinityApp.registeredWidgets?.has(w.componentName) ? (
                                    <div
                                        className={classNames('col-12 md:col-6', w.columnSpan > 0 && w.columnSpan < 12 ? `lg:col-${w.columnSpan}` : 'lg:col-4')}
                                        key={`widget_${index}_${w.componentName}`}
                                    >
                                        {trinityApp.registeredWidgets?.get(w.componentName)!({
                                            configs: configs,
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

export default Default;
