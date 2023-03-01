import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import React, { useRef } from 'react';
import { Chart } from 'primereact/chart';
import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

const PolarAreaChartWidget = ({ widget }: WidgetProps<TrinityWidget>) => {
    const chart = useRef<Chart>(null);

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return (
        <div className="card my-0 py-0 flex justify-content-center">
            <Chart
                ref={chart}
                style={{ height: widget.height ?? '11rem' }}
                type="polarArea"
                data={{
                    labels: widget.chartLabels,
                    datasets: [
                        {
                            label: widget.label,
                            data: widget.chartValues,
                            backgroundColor: widget.backgroundColors
                        }
                    ]
                }}
                options={{
                    ...{
                        plugins: {
                            legend: {
                                labels: {
                                    color: textColor
                                }
                            }
                        },
                        scales: {
                            r: {
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

export default PolarAreaChartWidget;
