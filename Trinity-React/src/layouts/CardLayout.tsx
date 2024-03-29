import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TrinityLayoutType from '@/types/Models/Layouts/TrinityLayoutType';
import trinityApp from '@/TrinityApp';

const CardLayout = ({ configs, resource, component, record, formData, setFieldValue, errors, localize }: LayoutProps<TrinityLayoutType>) => {
    return (
        <Card
            className={`col-12 md:col-${component.columnSpan}`}
            title={component.label}
            style={{ ...{ marginBottom: '2rem' }, ...component.style }}
        >
            <div className={classNames(['p-fluid grid grid-nogutter px-0 mx-0 col-12', component.columnSpan > 0 && component.columnSpan < 12 ? `md:col-${component.columnSpan}` : ''])}>
                {component?.schema.map((innerComponent, index) =>
                    trinityApp.registeredComponents?.has(innerComponent.componentName) ? (
                        <div
                            key={`${component.componentName}_${index}_${innerComponent.componentName}`}
                            className={classNames('col-12', component.columns ? `md:col-${12 / component.columns}` : 'md:col')}
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
                            className={classNames('col-12', component.columns ? `md:col-${12 / component.columns}` : 'md:col')}
                        />
                    )
                )}
            </div>
        </Card>
    );
};

export default CardLayout;
