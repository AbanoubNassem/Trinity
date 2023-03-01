import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { AppContext } from '@/contexts/AppContext';
import { TabView, TabPanel } from 'primereact/tabview';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TabsLayout, { TabLayout } from '@/types/Models/Layouts/TabsLayout';
import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';

const TabsLayout = ({ configs, resource, component, record, formData, setFieldValue, errors }: LayoutProps<TabsLayout>) => {
    const { components } = useContext(AppContext);

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
                    <div className={classNames(['p-fluid grid px-0 mx-0 col-12', tab.columnSpan > 0 && tab.columnSpan < 12 ? `md:col-${tab.columnSpan}` : ''])}>
                        {(tab as TrinityLayout)?.schema.map((innerComponent, index) =>
                            components?.has(innerComponent.componentName) ? (
                                components?.get(innerComponent.componentName)!({
                                    key: `fieldset_${index}_${innerComponent.componentName}`,
                                    configs: configs,
                                    resource: resource,
                                    component: innerComponent,
                                    record: record,
                                    containerClass: (tab as TrinityLayout).columns ? `md:col-${12 / (tab as TrinityLayout).columns}` : '',
                                    formData,
                                    setFieldValue,
                                    errors
                                })
                            ) : (
                                <div key={`form_${index}_${innerComponent.componentName}`}></div>
                            )
                        )}
                    </div>
                </TabPanel>
            ))}
        </TabView>
    );
};

export default TabsLayout;
