import '@/assets/styles/trinity.scss';

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { LayoutProvider } from '@/contexts/LayoutContext';
import MainLayout from '@/MainLayout';
import axios from 'axios';
import { createInertiaApp } from '@inertiajs/react';
import trinityApp from '@/TrinityApp';
import Error from '@/pages/Error';
import PlaceholderPage from '@/pages/PlaceholderPage';

import * as InertiaReact from '@inertiajs/react';
// @ts-ignore
import * as PrimeReact from 'primereact';

createInertiaApp({
    progress: false,
    resolve: async (name) => {
        try {
            let page = trinityApp.registeredPages.has(name) ? trinityApp.registeredPages.get(name) : (await import(`./pages/${name[0].toUpperCase() + name.slice(1)}.tsx`)).default;

            if (page.layout === undefined) {
                page.layout = (page: any) => <MainLayout children={page} />;
            }

            return page;
        } catch {
            return () => {
                const [currentComponent, setCurrentComponent] = useState(<PlaceholderPage />);

                setTimeout(() => {
                    setCurrentComponent(
                        <Error
                            statusCode={404}
                            reasonPhrase={`The ${name} page is not found!`}
                        />
                    );
                }, 5000);
                return <>{currentComponent}</>;
            };
        }
    },
    setup({ el, App, props }) {
        trinityApp.init(props.initialPage.props);

        ReactDOM.createRoot(el).render(
            <LayoutProvider>
                <App {...props} />
            </LayoutProvider>
        );
    }
}).then(() => {
    // axios.defaults.withCredentials = true;
    axios.interceptors.response.use(function (response) {
        // @ts-ignore
        const profiler = window.MiniProfiler as any;

        if (profiler && response.headers['x-miniprofiler-ids']) {
            profiler.fetchResults(JSON.parse(response.headers['x-miniprofiler-ids']));
        }
        return response;
    });
});

window.InertiaReact = InertiaReact;
window.React = React;
window.ReactDOM = ReactDOM;
window.PrimeReact = PrimeReact;
