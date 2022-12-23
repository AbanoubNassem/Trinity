import React from 'react';
import type Configs from '@/Types/Models/Configs';
import type Resource from '@/Types/Models/Resource';
import * as Inertia from '@inertiajs/inertia';
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';

export const AppContext = React.createContext<{
    configs?: Configs;
    resources?: Array<Resource>;
}>({});

export const AppContextProvider = (props: { children: React.ReactNode; initialPage: Inertia.Page<any> }) => {
    const { configs, resources } = props.initialPage.props.controller;
    InertiaProgress.init(configs?.progressSettings);

    let value = {
        configs,
        resources
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
