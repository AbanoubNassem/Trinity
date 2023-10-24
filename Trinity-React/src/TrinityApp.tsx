import { ReactElement } from 'react';
import * as signalR from '@microsoft/signalr';
import Configs from '@/types/Models/Configs';
import TrinityResource from '@/types/Models/TrinityResource';
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
import TrinityPageType from '@/types/Models/Pages/TrinityPageType';
import TrinityLocalizer from '@/utilities/trinity_localizer';
import TrinityUser from '@/types/Models/TrinityUser';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import WidgetProps from '@/types/Props/Widgets/WidgetProps';
import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';
import ColumnProps from '@/types/Props/Columns/ColumnProps';
import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';
import FieldProps from '@/types/Props/Fields/FieldProps';
import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';
import LayoutProps from '@/types/Props/Layouts/LayoutProps';
import TrinityLayoutType from '@/types/Models/Layouts/TrinityLayoutType';
import PageProps from '@/types/Props/Pages/PageProps';
import { changeTrinityTheme } from '@/utilities/trinity_theme';
import { HubConnection } from '@microsoft/signalr';

export class TrinityApp {
    private static localizer: TrinityLocalizer;
    static configs: Configs;
    static user: TrinityUser;
    static resources: Array<TrinityResource> = new Array<TrinityResource>();
    static pages: { [key: string]: TrinityPageType } = {};
    static registeredPages: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    static registeredComponents: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    static registeredColumns: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    static registeredWidgets: Map<string, (props: any) => React.ReactNode> = new Map<string, (props: any) => React.ReactNode>();
    static toast?: Toast;
    static databaseNotificationsCount?: number;
    static isRtl: boolean = false;
    static hubConnection: HubConnection;

    static serving(callback: (app: typeof TrinityApp) => void) {
        callback(this);
    }

    static init = (props: any) => {
        this.configs = props.configs as Configs;
        this.resources = props.resources as Array<TrinityResource>;
        this.pages = props.pages;
        this.user = props.user;
        this.localizer = new TrinityLocalizer(props.locale, props.fallbackLocale);
        this.isRtl = props.isRtl;
        this.databaseNotificationsCount = props.databaseNotificationsCount;

        setupProgress(this.configs.progressSettings);

        this.loadDefaults();

        document.body.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');

        const theme = localStorage.getItem('theme') ?? 'light';
        changeTrinityTheme(theme);

        this.hubConnection = new signalR.HubConnectionBuilder().withUrl(`/${this.configs.prefix}/trinity-notifications-hub`).build();
        this.hubConnection
            .start()
            .then(async () => {})
            .catch((err) => console.log(err));
    };

    private static loadDefaults() {
        this.registerLayout('GridLayout', GridLayout);
        this.registerLayout('PanelLayout', PanelLayout);
        this.registerLayout('CardLayout', CardLayout);
        this.registerLayout('FieldsetLayout', FieldsetLayout);
        this.registerLayout('TabsLayout', TabsLayout);

        this.registerComponent('DividerComponent', DividerComponent);

        this.registerField('TextField', TextField);
        this.registerField('IdField', IdField);
        this.registerField('TextAreaField', TextAreaField);
        this.registerField('MaskField', MaskField);
        this.registerField('SelectInputField', SelectInputField);
        this.registerField('BelongsToField', BelongsToField);
        this.registerField('DateTimeField', DateTimeField);
        this.registerField('NumberField', NumberField);
        this.registerField('SwitchInputField', SwitchInputField);
        this.registerField('SliderField', SliderField);
        this.registerField('EditorField', EditorField);
        this.registerField('FileUploadField', FileUploadField);
        this.registerField('RepeaterField', RepeaterField);

        this.registerColumn('TextColumn', TextColumn);
        this.registerColumn('IconColumn', IconColumn);
        this.registerColumn('BadgeColumn', BadgeColumn);
        this.registerColumn('ImageColumn', ImageColumn);
        this.registerColumn('ColorColumn', ColorColumn);
        this.registerColumn('BelongsToColumn', BelongsToColumn);
        this.registerColumn('AggregateColumn', AggregateColumn);

        this.registerWidget('StatsWidget', StatsWidget);
        this.registerWidget('BarChartWidget', BarChartWidget);
        this.registerWidget('PieChartWidget', PieChartWidget);
        this.registerWidget('DoughnutChartWidget', DoughnutChartWidget);
        this.registerWidget('VerticalBarChartWidget', VerticalBarChartWidget);
        this.registerWidget('HorizontalBarChartWidget', HorizontalBarChartWidget);
        this.registerWidget('StackedBarChartWidget', StackedBarChartWidget);
        this.registerWidget('LineChartWidget', LineChartWidget);
        this.registerWidget('PolarAreaChartWidget', PolarAreaChartWidget);
        this.registerWidget('RadarChartWidget', RadarChartWidget);
    }

    static registerComponent = (name: string, component: (props: any) => ReactElement) => {
        const Component = component;
        this.registeredComponents.set(name, (props) => <Component {...props} />);
    };

    static registerLayout = (name: string, component: (props: LayoutProps<TrinityLayoutType | any>) => ReactElement) => {
        const Component = component;
        this.registeredComponents.set(name, (props) => <Component {...props} />);
    };

    static registerField = (name: string, component: (props: FieldProps<TrinityFieldType | any>) => ReactElement) => {
        const Field = component;
        this.registeredComponents.set(name, (props: any) => (
            <BaseFieldComponent
                component={props.component}
                errors={props.errors}
                key={props.key}
            >
                <Field {...props} />
            </BaseFieldComponent>
        ));
    };
    static registerColumn = (name: string, component: (props: ColumnProps<TrinityColumnType | any>) => ReactElement) => {
        const Column = component;
        this.registeredColumns.set(name, (props) => <Column {...props} />);
    };
    static registerWidget = (name: string, component: (props: WidgetProps<TrinityWidgetType | any>) => ReactElement) => {
        const Widget = component;
        this.registeredWidgets.set(name, (props) => <Widget {...props} />);
    };
    static registerPage = (name: string, component: (props: PageProps<TrinityPageType>) => ReactElement) => {
        const Page = component;
        this.registeredPages.set(name, (props) => (
            <Page
                {...{
                    ...props.page,
                    ...{
                        configs: this.configs,
                        data: props.data,
                        localize: this.localize
                    }
                }}
            />
        ));
    };
    static localize = (key: string, ...args: Array<string>): string => {
        // @ts-ignore
        return this.localizer.localize(key, args);
    };
}

// @ts-ignore
window.Trinity = window.trinity = window.trinityApp = TrinityApp;

export default TrinityApp;
