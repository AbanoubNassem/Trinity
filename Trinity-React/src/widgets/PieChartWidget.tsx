import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import React, { useEffect, useRef } from 'react';
import { Chart } from 'primereact/chart';
import PieChartWidgetType from '@/types/Models/Widgets/PieChartWidgetType';

const PieChartWidget = ({ widget }: WidgetProps<PieChartWidgetType>) => {
    const chart = useRef<Chart>(null);

    return (
        <div className="card my-0 py-0 flex justify-content-center">
            <Chart
                ref={chart}
                style={{ height: widget.height ?? '11rem' }}
                type="pie"
                data={{
                    labels: widget.chartLabels,
                    datasets: [
                        {
                            data: widget.chartValues,
                            backgroundColor: widget.backgroundColors,
                            hoverBackgroundColor: widget.hoverBackgroundColor
                        }
                    ]
                }}
                options={{
                    ...{
                        plugins: {
                            legend: {
                                labels: {
                                    usePointStyle: true
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

export default PieChartWidget;
