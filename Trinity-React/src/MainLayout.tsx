import React, { useContext, useEffect, useRef } from 'react';

import { classNames, DomHandler } from 'primereact/utils';
import PrimeReact from 'primereact/api';
import { Head } from '@/components/Head';
import AppTopbar from '@/components/AppTopbar';
import { useEventListener, useUnmountEffect } from 'primereact/hooks';
import { LayoutContext } from '@/contexts/LayoutContext';
import AppSidebar from '@/components/AppSidebar';
import { Inertia } from '@inertiajs/inertia';
import AppFooter from '@/components/AppFooter';
import usePageProps from '@/hooks/trinity_page_props';
import { AppContext } from '@/contexts/AppContext';

const MainLayout = (props: any) => {
    const { layoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const topbarRef = useRef<any>(null);
    const sidebarRef = useRef<any>(null);
    const { toast } = useContext(AppContext);
    const { notifications } = usePageProps();

    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));

            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });

    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                topbarRef.current.topbarmenu.isSameNode(event.target) ||
                topbarRef.current.topbarmenu.contains(event.target) ||
                topbarRef.current.topbarmenubutton.isSameNode(event.target) ||
                topbarRef.current.topbarmenubutton.contains(event.target)
            );

            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });

    const hideMenu = () => {
        setLayoutState((prevLayoutState) => ({
            ...prevLayoutState,
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            menuHoverActive: false
        }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const hideProfileMenu = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: false }));
        unbindProfileMenuOutsideClickListener();
    };

    const blockBodyScroll = () => {
        DomHandler.addClass(document.body, 'blocked-scroll');
    };

    const unblockBodyScroll = () => {
        DomHandler.removeClass(document.body, 'blocked-scroll');
    };

    useEffect(() => {
        if (!!notifications?.length) {
            toast?.current?.show(notifications as any);
        }
    }, [notifications]);

    useEffect(() => {
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [layoutState.overlayMenuActive, layoutState.staticMenuMobileActive]);

    useEffect(() => {
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [layoutState.profileSidebarVisible]);

    useEffect(() => {
        Inertia.on('navigate', () => {
            hideMenu();
            hideProfileMenu();
        });
    }, []);

    PrimeReact.ripple = true;

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });

    const containerClass = classNames('layout-wrapper', {
        'layout-theme-light': layoutConfig.colorScheme === 'light',
        'layout-theme-dark': layoutConfig.colorScheme === 'dark',
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'p-input-filled': layoutConfig.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple
    });

    return (
        <>
            <Head />
            <div className={containerClass}>
                <AppTopbar ref={topbarRef} />
                <div
                    ref={sidebarRef}
                    className="layout-sidebar"
                >
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">{props.children}</div>
                    <AppFooter />
                </div>
                {/*<AppConfig />*/}
                <div className="layout-mask"></div>
            </div>
        </>
    );
};
export default MainLayout;
