import { Head as InertiaHead } from '@inertiajs/react';
import trinityApp from '@/TrinityApp';
import usePageProps from '@/hooks/trinity_page_props';

export const Head = (props: { title?: string; children?: React.ReactNode }) => {
    const page = usePageProps().page;
    const title = page?.label ?? props.title;
    //@ts-ignore
    const favicon = import.meta.env.DEV ? `${trinityApp.configs?.viteUrl}/favicon.ico` : `/${trinityApp.configs?.prefix}/trinity/dist/favicon.ico`;
    return (
        // @ts-ignore
        <InertiaHead title={title ? `${title} - ${trinityApp.configs?.title}` : trinityApp.configs?.title}>
            <link
                rel="icon"
                type="image/x-icon"
                href={trinityApp.configs?.favIcon ?? favicon}
            />
            {props.children}
        </InertiaHead>
    );
};
