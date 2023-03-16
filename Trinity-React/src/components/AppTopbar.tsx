import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from '@/contexts/LayoutContext';
import { Link, router } from '@inertiajs/react';
import { classNames } from 'primereact/utils';
import { useLogo } from '@/hooks/trinity_logo';
import { useConfigs } from '@/hooks/trinity_configs';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useLocalize } from '@/hooks/trinity_localizer';

const AppTopbar = forwardRef((props, ref) => {
    const configs = useConfigs();
    const logo = useLogo();
    const localize = useLocalize();
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const profileMenu = useRef<Menu>(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const profileItems = [
        {
            label: localize('profile'),
            items: [
                {
                    label: localize('logout'),
                    icon: 'pi pi-sign-out',
                    href: '',
                    command: () => {
                        router.post(`/${configs.prefix}/logout`);
                    }
                }
            ]
        }
    ];

    return (
        <div className="layout-topbar">
            <Link href={`/${configs.prefix}`}>
                <div className="layout-topbar-logo">
                    <>
                        <img
                            src={logo}
                            width="47.22px"
                            height={'35px'}
                            alt={configs?.title}
                        />
                        <span>{configs?.title}</span>
                    </>
                </div>
            </Link>

            <button
                ref={menubuttonRef}
                type="button"
                className="p-link layout-menu-button layout-topbar-button"
                onClick={onMenuToggle}
            >
                <i className="pi pi-bars" />
            </button>

            <button
                ref={topbarmenubuttonRef}
                type="button"
                className="p-link layout-topbar-menu-button layout-topbar-button"
                onClick={showProfileSidebar}
            >
                <i className="pi pi-ellipsis-v" />
            </button>

            <div
                ref={topbarmenuRef}
                className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}
            >
                <Button
                    className="p-link layout-topbar-button"
                    onClick={(e) => profileMenu.current!.toggle(e)}
                >
                    <i className="pi pi-user"></i>
                    <span>{localize('profile')}</span>
                </Button>
                <Menu
                    ref={profileMenu}
                    popup
                    model={profileItems}
                />
            </div>
        </div>
    );
});

export default AppTopbar;
