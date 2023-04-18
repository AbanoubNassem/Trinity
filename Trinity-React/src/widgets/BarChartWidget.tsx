import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import BarChartWidget from '@/types/Models/Widgets/BarChartWidget';
import React, { useRef } from 'react';
import { Chart } from 'primereact/chart';

const BarChartWidget = ({ widget }: WidgetProps<BarChartWidget>) => {
    const chart = useRef<Chart>(null);

    return (
        <div className="card widget-container my-0 py-0 flex justify-content-center">
            <Chart
                ref={chart}
                type="bar"
                style={{ height: widget.height ?? '11rem' }}
                data={{
                    labels: widget.chartLabels,
                    datasets: [
                        {
                            label: widget.label,
                            data: widget.chartValues,
                            backgroundColor: widget.backgroundColors,
                            borderColor: widget.borderColors,
                            borderWidth: widget.borderWidth
                        }
                    ]
                }}
                options={{
                    ...{
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    },
                    ...widget.options
                }}
            />
        </div>
    );
};

export default BarChartWidget;
