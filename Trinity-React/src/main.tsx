import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/assets/styles/trinity.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { AppContextProvider } from './contexts/AppContext';
import MainLayout from '@/MainLayout';
import axios from 'axios';

createInertiaApp({
    resolve: async (name) => {
        const page = (await import(`./pages/${name[0].toUpperCase() + name.slice(1)}.tsx`)).default;

        if (page.layout === undefined) {
            page.layout = (page: any) => <MainLayout children={page} />;
        }

        return page;
    },
    setup({ el, App, props }) {
        ReactDOM.createRoot(el).render(
            <AppContextProvider initialPage={props.initialPage}>
                <LayoutProvider>
                    <App {...props} />
                </LayoutProvider>
            </AppContextProvider>
        );
    }
}).then(() => {
    axios.interceptors.response.use(function (response) {
        // @ts-ignore
        const profiler = window.MiniProfiler as any;

        if (profiler && response.headers['x-miniprofiler-ids']) {
            profiler.fetchResults(JSON.parse(response.headers['x-miniprofiler-ids']));
        }
        return response;
    });
});
