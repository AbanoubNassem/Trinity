import Configs from '@/types/Models/Configs';
import TrinityResource from '@/types/Models/TrinityResource';
import React from 'react';
import { Toast } from 'primereact/toast';
import GridLayout from '@/layouts/GridLayout';
import PanelLayout from '@/layouts/PanelLayout';
import CardLayout from '@/layouts/CardLayout';
import FieldsetLayout from '@/layouts/FieldsetLayout';
import TabsLayout from '@/layouts/TabsLayout';
import TextField from '@/fields/TextField';
import IdField from '@/fields/IdField';
import TextAreaField from '@/fields/TextAreaField';
import MaskField from '@/fields/MaskField';
import SelectInputField from '@/fields/SelectInputField';
import BelongsToField from '@/fields/BelongsToField';
import DateTimeField from '@/fields/DateTimeField';
import NumberField from '@/fields/NumberField';
import SwitchInputField from '@/fields/SwitchInputField';
import SliderField from '@/fields/SliderField';
import EditorField from '@/fields/EditorField';
import FileUploadField from '@/fields/FileUploadField';
import RepeaterField from '@/fields/RepeaterField';
import DividerComponent from '@/components/DividerComponent';
import { setupProgress } from '@inertiajs/core';
import TextColumn from '@/columns/TextColumn';
import IconColumn from '@/columns/IconColumn';
import BadgeColumn from '@/columns/BadgeColumn';
import ImageColumn from '@/columns/ImageColumn';
import ColorColumn from '@/columns/ColorColumn';
import BelongsToColumn from '@/columns/BelongsToColumn';
import AggregateColumn from '@/columns/AggregateColumn';
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

class TrinityApp {
    configs!: Configs;
    resources: Array<TrinityResource> = new Array<TrinityResource>();
    pages: { [key: string]: TrinityPage<any> } = {};
    registeredPages: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    registeredComponents: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    registeredColumns: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    registeredWidgets: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    toast?: Toast;
    locale: { [key: string]: string } = {};

    init(props: any) {
        this.configs = props.configs as Configs;
        this.resources = props.resources as Array<TrinityResource>;
        this.pages = props.pages;
        this.locale = props.locale;

        setupProgress(this.configs.progressSettings);

        this.loadDefaults();
    }

    private loadDefaults() {
        this.registerComponent('GridLayout', (props) => <GridLayout {...props} />);
        this.registerComponent('PanelLayout', (props) => <PanelLayout {...props} />);
        this.registerComponent('CardLayout', (props) => <CardLayout {...props} />);
        this.registerComponent('FieldsetLayout', (props) => <FieldsetLayout {...props} />);
        this.registerComponent('TabsLayout', (props) => <TabsLayout {...props} />);
        this.registerComponent('TextField', (props) => <TextField {...props} />);
        this.registerComponent('IdField', (props) => <IdField {...props} />);
        this.registerComponent('TextAreaField', (props) => <TextAreaField {...props} />);
        this.registerComponent('MaskField', (props) => <MaskField {...props} />);
        this.registerComponent('SelectInputField', (props) => <SelectInputField {...props} />);
        this.registerComponent('BelongsToField', (props) => <BelongsToField {...props} />);
        this.registerComponent('DateTimeField', (props) => <DateTimeField {...props} />);
        this.registerComponent('NumberField', (props) => <NumberField {...props} />);
        this.registerComponent('SwitchInputField', (props) => <SwitchInputField {...props} />);
        this.registerComponent('SliderField', (props) => <SliderField {...props} />);
        this.registerComponent('EditorField', (props) => <EditorField {...props} />);
        this.registerComponent('FileUploadField', (props) => <FileUploadField {...props} />);
        this.registerComponent('RepeaterField', (props) => <RepeaterField {...props} />);
        this.registerComponent('DividerComponent', (props) => <DividerComponent {...props} />);

        this.registerColumn('TextColumn', (props) => <TextColumn {...props} />);
        this.registerColumn('IconColumn', (props) => <IconColumn {...props} />);
        this.registerColumn('BadgeColumn', (props) => <BadgeColumn {...props} />);
        this.registerColumn('ImageColumn', (props) => <ImageColumn {...props} />);
        this.registerColumn('ColorColumn', (props) => <ColorColumn {...props} />);
        this.registerColumn('BelongsToColumn', (props) => <BelongsToColumn {...props} />);
        this.registerColumn('AggregateColumn', (props) => <AggregateColumn {...props} />);

        this.registerWidget('StatsWidget', (props) => <StatsWidget {...props} />);
        this.registerWidget('BarChartWidget', (props) => <BarChartWidget {...props} />);
        this.registerWidget('PieChartWidget', (props) => <PieChartWidget {...props} />);
        this.registerWidget('DoughnutChartWidget', (props) => <DoughnutChartWidget {...props} />);
        this.registerWidget('VerticalBarChartWidget', (props) => <VerticalBarChartWidget {...props} />);
        this.registerWidget('HorizontalBarChartWidget', (props) => <HorizontalBarChartWidget {...props} />);
        this.registerWidget('StackedBarChartWidget', (props) => <StackedBarChartWidget {...props} />);
        this.registerWidget('LineChartWidget', (props) => <LineChartWidget {...props} />);
        this.registerWidget('PolarAreaChartWidget', (props) => <PolarAreaChartWidget {...props} />);
        this.registerWidget('RadarChartWidget', (props) => <RadarChartWidget {...props} />);
    }

    registerComponent(name: string, component: (props: any) => React.ReactNode) {
        this.registeredComponents.set(name, component);
    }

    registerColumn(name: string, component: (props: any) => React.ReactNode) {
        this.registeredColumns.set(name, component);
    }

    registerWidget(name: string, component: (props: any) => React.ReactNode) {
        this.registeredWidgets.set(name, component);
    }

    registerPage(name: string, component: (props: any) => React.ReactNode) {
        this.registeredPages.set(name, component);
    }
}

const trinityApp = new TrinityApp();
// @ts-ignore
window.Trinity = window.trinity = window.TrinityApp = window.trinityApp = trinityApp as any;

export default trinityApp;
