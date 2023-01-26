import React, { useContext } from 'react';
import { Head as InertiaHead } from '@inertiajs/react'
import { AppContext } from '@/contexts/AppContext';

export const Head = (props: { title?: string; children?: React.ReactNode }) => {
    const { configs } = useContext(AppContext);

    return (
        // @ts-ignore
        <InertiaHead title={props.title ? `${props.title} - ${configs?.title}` : configs?.title}>
            <link
                rel="icon"
                type="image/x-icon"
                href={configs?.favIcon ?? '/trinity/dist/favicon.ico'}
            />
            {props.children}
        </InertiaHead>
    );
};
