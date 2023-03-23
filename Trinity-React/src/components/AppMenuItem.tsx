import React from 'react';

import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';
import { Link } from '@inertiajs/react';
import { CSSTransition as Transition } from 'react-transition-group';
import { useConfigs } from '@/hooks/trinity_configs';

const AppMenuItem = (props: { root?: any; index: number; parentKey?: any; item: any; className?: any }) => {
    const configs = useConfigs();

    const item = props.item;
    const key = props.parentKey ? props.parentKey + '-' + props.index : String(props.index);
    const isActive = (item: any) => (item.to === '/' ? window.location.pathname.endsWith(`/${configs.prefix}/`) : window.location.pathname.includes(item.to));
    const itemClick = (event: any) => {
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        //execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
    };

    const subMenu = item.items && item.visible && (
        <Transition
            timeout={{ enter: 1000, exit: 450 }}
            classNames="layout-submenu"
            in={props.root ? true : isActive(item)}
            key={item.label}
        >
            <ul>
                {item.items.map((child: { badgeClass: any; label: React.Key | null | undefined }, i: any) => {
                    return (
                        <AppMenuItem
                            item={child}
                            index={i}
                            className={child.badgeClass}
                            parentKey={key}
                            key={child.label}
                        />
                    );
                })}
            </ul>
        </Transition>
    );

    return (
        <li className={classNames({ 'layout-root-menuitem': props.root, 'active-menuitem': isActive(item) })}>
            {props.root && item.visible && <div className="layout-menuitem-root-text">{item.label}</div>}
            {(!item.to || item.items) && item.visible ? (
                <Link
                    href={item.url}
                    onClick={(e) => itemClick(e)}
                    className={classNames(item.class, 'p-ripple')}
                    target={item.target}
                >
                    <i className={classNames('layout-menuitem-icon', item.icon)}></i>
                    <span className="layout-menuitem-text">{item.label}</span>
                    {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>}
                    <Ripple />
                </Link>
            ) : null}

            {item.to && !item.items && item.visible ? (
                <Link
                    href={`/${configs?.prefix}${item.to}`}
                    onClick={(e) => itemClick(e)}
                    className={classNames(item.class, 'p-ripple', { 'active-route': isActive(item) })}
                    target={item.target}
                >
                    <i className={classNames('layout-menuitem-icon', item.icon)}></i>
                    <span className="layout-menuitem-text">{item.label}</span>
                    {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>}
                    <Ripple />
                </Link>
            ) : null}

            {subMenu}
        </li>
    );
};

export default AppMenuItem;
