import React from 'react';
import { Head as InertiaHead } from '@inertiajs/react';
import trinityApp from '@/TrinityApp';

export const Head = (props: { title?: string; children?: React.ReactNode }) => {
    return (
        // @ts-ignore
        <InertiaHead title={props.title ? `${props.title} - ${trinityApp.configs?.title}` : trinityApp.configs?.title}>
            <link
                rel="icon"
                type="image/x-icon"
                href={trinityApp.configs?.favIcon ?? `/${trinityApp.configs?.prefix}/trinity/dist/favicon.ico`}
            />
            {props.children}
        </InertiaHead>
    );
};
