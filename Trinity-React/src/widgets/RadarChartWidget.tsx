import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import { useRef } from 'react';
import { Chart } from 'primereact/chart';
import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';

const RadarChartWidget = ({ widget }: WidgetProps<TrinityWidgetType>) => {
    const chart = useRef<Chart>(null);

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    return (
        <div className="card my-0 py-0 flex justify-content-center">
            <Chart
                ref={chart}
                style={{ height: widget.height ?? '11rem' }}
                type="radar"
                data={{
                    labels: widget.chartLabels,
                    datasets: widget.chartValues
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
                                    color: textColorSecondary
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

export default RadarChartWidget;
