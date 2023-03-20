import React from 'react';
import AppMenuItem from '@/components/AppMenuItem';
import trinityApp from '@/TrinityApp';
import { useLocalize } from '@/hooks/trinity_localizer';

const AppSidebar = () => {
    const localize = useLocalize();
    const model: Array<any> = [];

    if (trinityApp.pages['dashboard']) {
        const dashboard = trinityApp.pages['dashboard'];

        model.push({
            label: localize('dashboard'),
            visible: true,
            items: [
                {
                    label: dashboard.label,
                    visible: true,
                    icon: dashboard.icon,
                    to: '/'
                }
            ]
        });
    }

    if (trinityApp.resources?.length) {
        model.push({
            label: localize('resources'),
            items: [],
            visible: true
        });

        for (let r in trinityApp.resources ?? []) {
            const resource = trinityApp.resources![r];
            model[model.length - 1].items.push({
                label: resource.pluralLabel,
                icon: resource.icon,
                to: `/${resource.pluralLabel.toLowerCase()}`,
                visible: true,
                resource
            });
        }
    }

    if (Object.keys(trinityApp.pages).filter((x) => x !== 'dashboard').length) {
        model.push({
            label: localize('pages'),
            items: [],
            visible: true
        });
        for (let p in trinityApp.pages ?? []) {
            const page = trinityApp.pages![p];
            if (page.slug.toLowerCase() === 'dashboard') continue;

            model[model.length - 1].items.push({
                label: page.label ?? page.slug,
                icon: page.icon,
                to: `/pages/${page.slug?.toLowerCase()}`,
                visible: true,
                page
            });
        }
    }

    return (
        <ul className="layout-menu">
            {model.map((item, i) => {
                return !item.seperator ? (
                    <AppMenuItem
                        item={item}
                        root={true}
                        index={i}
                        key={item.label}
                    />
                ) : (
                    <li
                        key={i}
                        className="menu-separator"
                    ></li>
                );
            })}

            {/*<Link href="https://www.primefaces.org/primeblocks-react" target="_blank" style={{ cursor: 'pointer' }}>*/}
            {/*    <img alt="Prime Blocks" className="w-full mt-3" src={useLogo()} />*/}
            {/*</Link>*/}
        </ul>
    );
};

export default AppSidebar;
