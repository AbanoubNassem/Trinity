import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import React, { useRef } from 'react';
import { Chart } from 'primereact/chart';
import BaseWidget from '@/types/Models/Widgets/BaseWidget';

const StackedBarChartWidget = ({ widget }: WidgetProps<BaseWidget>) => {
    const chart = useRef<Chart>(null);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return (
        <div className="card my-0 py-0">
            <Chart
                ref={chart}
                type="bar"
                style={{ height: widget.height ?? '11rem' }}
                data={{
                    labels: widget.chartLabels,
                    datasets: widget.chartValues
                }}
                options={{
                    ...{
                        maintainAspectRatio: false,
                        aspectRatio: 0.8,
                        plugins: {
                            tooltips: {
                                mode: 'index',
                                intersect: false
                            },
                            legend: {
                                labels: {
                                    color: textColor
                                }
                            }
                        },
                        scales: {
                            x: {
                                stacked: true,
                                ticks: {
                                    color: textColorSecondary
                                },
                                grid: {
                                    color: surfaceBorder
                                }
                            },
                            y: {
                                stacked: true,
                                ticks: {
                                    color: textColorSecondary
                                },
                                grid: {
                                    color: surfaceBorder
                                }
                            }
                        }
                    },
                    ...widget.options
                }}
            />
        </div>
    );
};

export default StackedBarChartWidget;
