import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import { useRef } from 'react';
import { Chart } from 'primereact/chart';
import DoughnutChartWidgetType from '@/types/Models/Widgets/DoughnutChartWidgetType';

const DoughnutChartWidget = ({ widget }: WidgetProps<DoughnutChartWidgetType>) => {
    const chart = useRef<Chart>(null);

    return (
        <div className="card my-0 py-0 flex justify-content-center">
            <Chart
                ref={chart}
                style={{ height: widget.height ?? '11rem' }}
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
