import { useConfigs } from '@/hooks/trinity_configs';
import { classNames } from 'primereact/utils';
import React, { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';

const Dashboard = () => {
    const configs = useConfigs();
    const { widgets } = useContext(AppContext);

    return (
        <div className="grid">
            {configs.dashboardPage.schema.map((w, index) =>
                widgets?.has(w.componentName) ? (
                    <div
                        className={classNames('col-12 md:col-6', w.columnSpan > 0 && w.columnSpan < 12 ? `lg:col-${w.columnSpan}` : 'lg:col-4')}
                        key={`widget_${index}_${w.componentName}`}
                    >
                        {widgets?.get(w.componentName)!({
                            configs: configs,
                            widget: w
                        })}
                    </div>
                ) : (
                    <div>Unknown Widget {w.componentName}</div>
                )
            )}
        </div>
    );
};

export default Dashboard;
