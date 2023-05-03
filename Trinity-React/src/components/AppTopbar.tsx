import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { LayoutContext } from '@/contexts/LayoutContext';
import { Link, router } from '@inertiajs/react';
import { classNames } from 'primereact/utils';
import { useLogo } from '@/hooks/trinity_logo';
import { useConfigs } from '@/hooks/trinity_configs';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useLocalize } from '@/hooks/trinity_localizer';
import { useTrinityUser } from '@/hooks/trinity_user';
import { Avatar } from 'primereact/avatar';
import PrimeReact from 'primereact/api';
import { changeTrinityTheme } from '@/utilities/trinity_theme';

const AppTopbar = forwardRef((props, ref) => {
    const configs = useConfigs();
    const logo = useLogo();
    const localize = useLocalize();
    const user = useTrinityUser();

    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const profileMenu = useRef<Menu>(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        changeTrinityTheme(newTheme);
    };
    const profileItems = [
        {
            label: user.name,
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
            <div className="flex justify-content-center align-items-center">
                <Link href={`/${configs.prefix}/`}>
                    <div className="layout-topbar-logo">
                        <>
                            <img
                                src={logo}
                                width="135px"
                                height={'35px'}
                                alt={configs?.title}
                            />
                        </>
                    </div>
                </Link>

                <Button
                    icon={`pi ${theme === 'light' ? 'pi-sun' : 'pi-moon'}`}
                    rounded
                    text
                    size="large"
                    aria-label="Theme"
                    onClick={changeTheme}
                />
            </div>

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
                {user.avatar?.length ? (
                    <div
                        className="flex align-items-center cursor-pointer"
                        onClick={(e) => profileMenu.current!.toggle(e)}
                    >
                        <Avatar
                            image={user.avatar}
                            shape="circle"
                            size="large"
                        />
                        <span className="mx-3 sm:block md:hidden text-lg">{localize('profile')}</span>
                    </div>
                ) : (
                    <Button
                        className="p-link layout-topbar-button"
                        onClick={(e) => profileMenu.current!.toggle(e)}
                        rounded
                    >
                        <i className="pi pi-user"></i>
                        <span className="mx-1 text-white">{localize('profile')}</span>
                    </Button>
                )}
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
