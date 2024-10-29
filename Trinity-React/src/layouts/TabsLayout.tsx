import { classNames } from 'primereact/utils';
import { TabView, TabPanel } from 'primereact/tabview';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TabsLayoutType, { TabLayoutType } from '@/types/Models/Layouts/TabsLayoutType';
import TrinityLayoutType from '@/types/Models/Layouts/TrinityLayoutType';
import trinityApp from '@/TrinityApp';

const TabsLayout = ({ configs, resource, component, record, formData, setFieldValue, errors, localize }: LayoutProps<TabsLayoutType>) => {
    return (
        <TabView
            className={`col-12 md:col-${component.columnSpan}`}
            activeIndex={component.activeTabIndex}
            scrollable={component.scrollable}
            style={component.style}
        >
            {component?.schema.map((tab, tabIndex) => (
                <TabPanel
                    header={tab.label}
                    key={`tab_${tabIndex}`}
                    disabled={tab.disabled}
                    style={tab.style}
                    leftIcon={(tab as TabLayoutType).leftHeaderIcon}
                    rightIcon={(tab as TabLayoutType).rightHeaderIcon}
                >
                    <div className={classNames(['p-fluid grid grid-nogutter px-0 mx-0 col-12', tab.columnSpan > 0 && tab.columnSpan < 12 ? `md:col-${tab.columnSpan}` : ''])}>
                        {(tab as TrinityLayoutType)?.schema.map((innerComponent, index) =>
                            trinityApp.registeredComponents?.has(innerComponent.componentName) ? (
                                <div
                                    key={`${component.componentName}_${index}_${innerComponent.componentName}`}
                                    className={classNames('col-12', (tab as TrinityLayoutType).columns ? `md:col-${12 / (tab as TrinityLayoutType).columns!}` : 'md:col')}
                                >
                                    {trinityApp.registeredComponents?.get(innerComponent.componentName)!({
                                        configs: configs,
                                        resource: resource,
                                        component: innerComponent,
                                        record: record,
                                        formData,
                                        setFieldValue,
                                        errors,
                                        localize
                                    })}
                                </div>
                            ) : (
                                <div
                                    key={`form_${index}_${innerComponent.componentName}`}
                                    className={classNames('col-12', (tab as TrinityLayoutType).columns ? `md:col-${12 / (tab as TrinityLayoutType).columns!}` : 'md:col')}
                                />
                            )
                        )}
                    </div>
                </TabPanel>
            ))}
        </TabView>
    );
};

export default TabsLayout;
