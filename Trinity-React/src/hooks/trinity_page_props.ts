import Configs from '@/types/Models/Configs';
import TrinityResource from '@/types/Models/TrinityResource';
import { usePage } from '@inertiajs/react';
import { ErrorBag, Errors } from '@inertiajs/core/types/types';
import TrinityPage from '@/types/Models/Pages/TrinityPage';

export default function usePageProps<T>(): {
    component: string;
    configs?: Configs;
    resources?: Array<TrinityResource>;
    pages?: { [key: string]: TrinityPage };
    resource?: TrinityResource;
    page?: TrinityPage;
    data?: T;
    errors: Errors & ErrorBag;
    notifications?: Array<string>;
    sharedProps: {
        [key: string]: any;
    };
    [key: string]: any;
} {
    const page = usePage();
    return {
        component: page.component,
        ...(page.props as any)
    };
}
