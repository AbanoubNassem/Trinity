import { Inertia } from '@inertiajs/inertia';

export function trinityLink(href: string, preserveScroll: boolean = false, preserveState: boolean = true) {
    Inertia.visit(href, {
        preserveState: preserveState,
        preserveScroll: preserveScroll
    });
}
