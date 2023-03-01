import React, { RefObject, useRef } from 'react';
import GridLayout from '@/layouts/GridLayout';
import FieldsetLayout from '@/layouts/FieldsetLayout';
import TextField from '@/fields/TextField';
import IdField from '@/fields/IdField';
import TextAreaField from '@/fields/TextAreaField';
import MaskField from '@/fields/MaskField';
import SelectInputField from '@/fields/SelectInputField';
import BelongsToField from '@/fields/BelongsToField';
import DateTimeField from '@/fields/DateTimeField';
import NumberField from '@/fields/NumberField';
import { Toast } from 'primereact/toast';
import SwitchInputField from '@/fields/SwitchInputField';
import TextColumn from '@/columns/TextColumn';
import Configs from '@/types/Models/Configs';
import TrinityResource from '@/types/Models/TrinityResource';
import IconColumn from '@/columns/IconColumn';
import BadgeColumn from '@/columns/BadgeColumn';
import ImageColumn from '@/columns/ImageColumn';
import ColorColumn from '@/columns/ColorColumn';
import BelongsToColumn from '@/columns/BelongsToColumn';
import AggregateColumn from '@/columns/AggregateColumn';
import SliderField from '@/fields/SliderField';
import EditorField from '@/fields/EditorField';
import FileUploadField from '@/fields/FileUploadField';
import { Page, setupProgress } from '@inertiajs/core';
import RepeaterField from '@/fields/RepeaterField';
import DividerComponent from '@/components/DividerComponent';
import TabsLayout from '@/layouts/TabsLayout';
import PanelLayout from '@/layouts/PanelLayout';
import CardLayout from '@/layouts/CardLayout';
import StatsWidget from '@/widgets/StatsWidget';
import BarChartWidget from '@/widgets/BarChartWidget';
import PieChartWidget from '@/widgets/PieChartWidget';
import DoughnutChartWidget from '@/widgets/DoughnutChartWidget';
import VerticalBarChartWidget from '@/widgets/VerticalBarChartWidget';
import HorizontalBarChartWidget from '@/widgets/HorizontalBarChartWidget';
import StackedBarChartWidget from '@/widgets/StackedBarChartWidget';
import LineChartWidget from '@/widgets/LineChartWidget';
import PolarAreaChartWidget from '@/widgets/PolarAreaChartWidget';
import RadarChartWidget from '@/widgets/RadarChartWidget';
import TrinityPage from '@/types/Models/Pages/TrinityPage';

export const AppContext = React.createContext<{
    configs?: Configs;
    resources?: Array<TrinityResource>;
    pages?: { [key: string]: TrinityPage };
    components?: Map<string, (props: any) => React.ReactNode>;
    columns?: Map<string, (props: any) => React.ReactNode>;
    widgets?: Map<string, (props: any) => React.ReactNode>;
    toast?: RefObject<Toast>;
}>({});

export const AppContextProvider = (props: { children: React.ReactNode; initialPage: Page<any> }) => {
    const { configs, resources, pages } = props.initialPage.props;

    setupProgress(configs?.progressSettings);

    const components = new Map<string, (props: any) => React.ReactNode>([
        ['GridLayout', (props) => <GridLayout {...props} />],
        ['PanelLayout', (props) => <PanelLayout {...props} />],
        ['CardLayout', (props) => <CardLayout {...props} />],
        ['FieldsetLayout', (props) => <FieldsetLayout {...props} />],
        ['TabsLayout', (props) => <TabsLayout {...props} />],
        ['TextField', (props) => <TextField {...props} />],
        ['IdField', (props) => <IdField {...props} />],
        ['TextAreaField', (props) => <TextAreaField {...props} />],
        ['MaskField', (props) => <MaskField {...props} />],
        ['SelectInputField', (props) => <SelectInputField {...props} />],
        ['BelongsToField', (props) => <BelongsToField {...props} />],
        ['DateTimeField', (props) => <DateTimeField {...props} />],
        ['NumberField', (props) => <NumberField {...props} />],
        ['SwitchInputField', (props) => <SwitchInputField {...props} />],
        ['SliderField', (props) => <SliderField {...props} />],
        ['EditorField', (props) => <EditorField {...props} />],
        ['FileUploadField', (props) => <FileUploadField {...props} />],
        ['RepeaterField', (props) => <RepeaterField {...props} />],
        ['DividerComponent', (props) => <DividerComponent {...props} />]
    ]);

    const columns = new Map<string, (props: any) => React.ReactNode>([
        ['TextColumn', (props) => <TextColumn {...props} />],
        ['IconColumn', (props) => <IconColumn {...props} />],
        ['BadgeColumn', (props) => <BadgeColumn {...props} />],
        ['ImageColumn', (props) => <ImageColumn {...props} />],
        ['ColorColumn', (props) => <ColorColumn {...props} />],
        ['BelongsToColumn', (props) => <BelongsToColumn {...props} />],
        ['AggregateColumn', (props) => <AggregateColumn {...props} />]
    ]);

    const widgets = new Map<string, (props: any) => React.ReactNode>([
        ['StatsWidget', (props) => <StatsWidget {...props} />],
        ['BarChartWidget', (props) => <BarChartWidget {...props} />],
        ['PieChartWidget', (props) => <PieChartWidget {...props} />],
        ['DoughnutChartWidget', (props) => <DoughnutChartWidget {...props} />],
        ['VerticalBarChartWidget', (props) => <VerticalBarChartWidget {...props} />],
        ['HorizontalBarChartWidget', (props) => <HorizontalBarChartWidget {...props} />],
        ['StackedBarChartWidget', (props) => <StackedBarChartWidget {...props} />],
        ['LineChartWidget', (props) => <LineChartWidget {...props} />],
        ['PolarAreaChartWidget', (props) => <PolarAreaChartWidget {...props} />],
        ['RadarChartWidget', (props) => <RadarChartWidget {...props} />]
    ]);

    const toast = useRef<Toast>(null);

    let value = {
        configs,
        resources,
        pages,
        components,
        columns,
        widgets,
        toast: toast
    };

    return (
        <AppContext.Provider value={value}>
            <Toast ref={toast} />
            {props.children}
        </AppContext.Provider>
    );
};
