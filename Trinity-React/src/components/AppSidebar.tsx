import React, { useContext } from 'react';
import { LayoutContext } from '@/contexts/LayoutContext';
import AppMenuItem from '@/components/AppMenuItem';
import { AppContext } from '@/contexts/AppContext';

const AppSidebar = () => {
    const { resources } = useContext(AppContext);
    const { layoutConfig } = useContext(LayoutContext);
    const model: Array<any> = [];

    model.push({
        label: 'Home',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-home',
                to: '/',
                visible: true
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
        model[1].items.push({
            label: resource.pluralLabel,
            icon: resource.icon,
            to: `/${resource.pluralLabel.toLowerCase()}`,
            visible: true,
            resource
        });
    }

    return (
        <ul className="layout-menu">
            {model.map((item, i) => {
                return !item.seperator ? <AppMenuItem item={item} root={true} index={i} key={item.label} /> : <li key={i} className="menu-separator"></li>;
            })}

            {/*<Link href="https://www.primefaces.org/primeblocks-react" target="_blank" style={{ cursor: 'pointer' }}>*/}
            {/*    <img alt="Prime Blocks" className="w-full mt-3" src={useLogo()} />*/}
            {/*</Link>*/}
        </ul>
    );
};

export default AppSidebar;
