import Configs from '@/types/Models/Configs';
import Resource from '@/types/Models/Resource';
import { usePage } from '@inertiajs/react';
import { ErrorBag, Errors } from '@inertiajs/core/types/types';

export default function usePageProps<T>(): {
    component: string;
    configs?: Configs;
    resources?: Array<Resource>;
    resource?: Resource;
    data?: T;
    errors: Errors & ErrorBag;
    notifications?: Array<string>;
    sharedProps: {
        [key: string]: string;
    };
} {
    const page = usePage();
    return {
        component: page.component,
        ...(page.props as any)
    };
}
