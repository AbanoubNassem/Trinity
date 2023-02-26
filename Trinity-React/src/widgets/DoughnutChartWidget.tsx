import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import React, { useRef } from 'react';
import { Chart } from 'primereact/chart';
import DoughnutChartWidget from '@/types/Models/Widgets/DoughnutChartWidget';

const DoughnutChartWidget = ({ widget }: WidgetProps<DoughnutChartWidget>) => {
    const chart = useRef<Chart>(null);

    return (
        <div className="card my-0 py-0 flex justify-content-center">
            <Chart
                ref={chart}
                className="h-11rem"
                type="doughnut"
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
                        cutout: widget.cutout
                    },
                    ...widget.options
                }}
            />
        </div>
    );
};

export default DoughnutChartWidget;
