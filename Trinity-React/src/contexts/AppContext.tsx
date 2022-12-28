import React, { RefObject, useRef } from 'react';
import type Configs from '@/Types/Models/Configs';
import type Resource from '@/Types/Models/Resource';
import * as Inertia from '@inertiajs/inertia';
import { InertiaProgress } from '@inertiajs/progress';
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

export const AppContext = React.createContext<{
    configs?: Configs;
    resources?: Array<Resource>;
    components?: Map<string, (props: any) => React.ReactNode>;
    toast?: RefObject<Toast>;
}>({});

export const AppContextProvider = (props: { children: React.ReactNode; initialPage: Inertia.Page<any> }) => {
    const { configs, resources } = props.initialPage.props.controller;
    InertiaProgress.init(configs?.progressSettings);

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
        ['NumberField', (props) => <NumberField {...props} />]
    ]);

    const toast = useRef<Toast>(null);

    let value = {
        configs,
        resources,
        components,
        toast: toast
    };

    return (
        <AppContext.Provider value={value}>
            <Toast ref={toast} />
            {props.children}
        </AppContext.Provider>
    );
};
