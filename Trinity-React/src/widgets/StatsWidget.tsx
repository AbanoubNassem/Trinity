import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import StatsWidgetType from '@/types/Models/Widgets/StatsWidgetType';
import { Chart } from 'primereact/chart';
import { useEffect, useRef } from 'react';

const StatsWidget = ({ widget }: WidgetProps<StatsWidgetType>) => {
    const chart = useRef<Chart>(null);

    useEffect(() => {
        // chart.current?.getCanvas().classList.add('w-full');
        chart.current?.getCanvas().classList.add('border-round-xl');
    }, []);

    return (
        <div
            className="card m-0 p-0 flex flex-column justify-content-between"
            style={{
                ...{
                    height: widget.height ?? '11rem'
                },
                ...widget.style
            }}
        >
            <div className="flex flex-column p-4">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-500 font-medium mb-3">{widget.title}</span>
                        <div className="text-900 font-medium text-xl">{widget.value}</div>
                    </div>
                    {widget.icon && (
                        <div
                            className="flex align-items-center justify-content-center  border-round"
                            style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                backgroundColor: widget.iconBackgroundColor ?? '#d0e1fd'
                            }}
                        >
                            <i
                                className={`${widget.icon}  text-xl`}
                                style={{ color: widget.iconColor ?? '#3b82f6' }}
                            />
                        </div>
                    )}
                </div>
                {widget.description && (
                    <span
                        className={`font-medium`}
                        style={{ color: widget.descriptionColor }}
                    >
                        {widget.description}
                    </span>
                )}
            </div>
            {widget.chartValues && (
                <Chart
                    height={`27%`}
                    ref={chart}
                    type={'line'}
                    data={{
                        labels: widget.chartLabels ?? widget.chartValues,
                        datasets: [
                            {
                                data: widget.chartValues,
                                backgroundColor: widget.chartBackgroundColor ?? 'rgb(240 253 244)',
                                borderColor: widget.chartBorderColor ?? 'rgb(74 222 128)',
                                borderWidth: 2,
                                fill: 'start',
                                tension: 0.5
                            }
                        ]
                    }}
                    options={{
                        elements: {
                            point: {
                                radius: 0
                            }
                        },
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                display: false
                            },
                            y: {
                                display: false
                            }
                        },
                        tooltips: {
                            enabled: false
                        }
                    }}
                />
            )}
        </div>
    );
};

export default StatsWidget;
