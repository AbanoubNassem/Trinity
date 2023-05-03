import React from 'react';
import { classNames } from 'primereact/utils';
import { TabView, TabPanel } from 'primereact/tabview';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TabsLayout, { TabLayout } from '@/types/Models/Layouts/TabsLayout';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';
import trinityApp from '@/TrinityApp';

const TabsLayout = ({ configs, resource, component, record, formData, setFieldValue, errors, localize }: LayoutProps<TabsLayout>) => {
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
                    leftIcon={(tab as TabLayout).leftHeaderIcon}
                    rightIcon={(tab as TabLayout).rightHeaderIcon}
                >
                    <div className={classNames(['p-fluid grid grid-nogutter px-0 mx-0 col-12', tab.columnSpan > 0 && tab.columnSpan < 12 ? `md:col-${tab.columnSpan}` : ''])}>
                        {(tab as TrinityLayout)?.schema.map((innerComponent, index) =>
                            trinityApp.registeredComponents?.has(innerComponent.componentName) ? (
                                <div
                                    key={`${component.componentName}_${index}_${innerComponent.componentName}`}
                                    className={(tab as TrinityLayout).columns ? `md:col-${12 / (tab as TrinityLayout).columns!}` : 'sm:col-12 md:col'}
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
                                    className={(tab as TrinityLayout).columns ? `md:col-${12 / (tab as TrinityLayout).columns!}` : 'sm:col-12 md:col'}
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
