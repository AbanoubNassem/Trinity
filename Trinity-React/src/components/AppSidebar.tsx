import React, { useContext } from 'react';
import { LayoutContext } from '@/contexts/LayoutContext';
import AppMenuItem from '@/components/AppMenuItem';
import { AppContext } from '@/contexts/AppContext';

const AppSidebar = () => {
    const { resources, pages } = useContext(AppContext);
    const { layoutConfig } = useContext(LayoutContext);
    const model: Array<any> = [];

    const dashboard = pages!['dashboard'];

    model.push({
        label: 'Dashboard',
        visible: true,
        items: [
            {
                label: dashboard.label,
                visible: true,
                icon: dashboard.icon,
                to: dashboard.to
            }
        ]
    });

    model.push({
        label: 'Resources',
        items: [],
        visible: true
    });

    for (let r in resources ?? []) {
        const resource = resources![r];
        model[model.length - 1].items.push({
            label: resource.pluralLabel,
            icon: resource.icon,
            to: `/${resource.pluralLabel.toLowerCase()}`,
            visible: true,
            resource
        });
    }

    model.push({
        label: 'Pages',
        items: [],
        visible: true
    });
    for (let p in pages ?? []) {
        const page = pages![p];
        if (page.pageName === 'Dashboard') continue;

        model[model.length - 1].items.push({
            label: page.label ?? page.pageName,
            icon: page.icon,
            to: `/pages/${page.pageName?.toLowerCase()}`,
            visible: true,
            page
        });
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
