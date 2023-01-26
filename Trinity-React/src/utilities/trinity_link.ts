import { router } from '@inertiajs/react';

export function trinityLink(href: string, preserveScroll: boolean = false, preserveState: boolean = true) {
    router.visit(href, {
        preserveState: preserveState,
        preserveScroll: preserveScroll
    });
}
