import { usePage } from '@inertiajs/inertia-react';
import Errors from '../Types/Models/errors';
import type { Page } from '@inertiajs/inertia';
import Configs from '@/types/Models/Configs';
import Resource from '@/types/Models/Resource';

export default function usePageProps<T>() {
    const { props, component } = usePage<
        Page<{
            controller: {
                configs?: Configs;
                resources?: Array<Resource>;
                resource?: Resource;
                data?: T;
                errors?: Errors;
                notifications?: Array<string>;
            };
            sharedProps: {
                [key: string]: string;
            };
        }>
    >();

    return {
        ...{ component },
        ...props.controller,
        ...props.sharedProps
    };
}
