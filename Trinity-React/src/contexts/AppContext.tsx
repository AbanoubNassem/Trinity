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
import Resource from '@/types/Models/Resource';
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

export const AppContext = React.createContext<{
    configs?: Configs;
    resources?: Array<Resource>;
    components?: Map<string, (props: any) => React.ReactNode>;
    columns?: Map<string, (props: any) => React.ReactNode>;
    toast?: RefObject<Toast>;
}>({});

export const AppContextProvider = (props: { children: React.ReactNode; initialPage: Page<any> }) => {
    const { configs, resources } = props.initialPage.props;

    setupProgress(configs?.progressSettings);

    const components = new Map<string, (props: any) => React.ReactNode>([
        ['GridLayout', (props) => <GridLayout {...props} />],
        ['FieldsetLayout', (props) => <FieldsetLayout {...props} />],
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
        ['FileUploadField', (props) => <FileUploadField {...props} />]
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

    const toast = useRef<Toast>(null);

    let value = {
        configs,
        resources,
        components,
        columns,
        toast: toast
    };

    return (
        <AppContext.Provider value={value}>
            <Toast ref={toast} />
            {props.children}
        </AppContext.Provider>
    );
};
