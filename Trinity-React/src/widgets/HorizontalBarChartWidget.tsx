import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import { useRef } from 'react';
import { Chart } from 'primereact/chart';
import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';

const HorizontalBarChartWidget = ({ widget }: WidgetProps<TrinityWidgetType>) => {
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
                        indexAxis: 'y',
                        maintainAspectRatio: false,
                        aspectRatio: 0.8,
                        plugins: {
                            legend: {
                                labels: {
                                    fontColor: textColor
                                }
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    color: textColorSecondary,
                                    font: {
                                        weight: 500
                                    }
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false
                                }
                            },
                            y: {
                                ticks: {
                                    color: textColorSecondary
                                },
                                grid: {
                                    color: surfaceBorder,
                                    drawBorder: false
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

export default HorizontalBarChartWidget;
