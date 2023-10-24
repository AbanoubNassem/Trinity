import { createContext, useState } from 'react';

export const LayoutContext = createContext<{
    layoutConfig: { ripple: boolean; inputStyle: string; menuMode: string; colorScheme: string; theme: string; scale: number };
    layoutState: { staticMenuDesktopInactive: boolean; overlayMenuActive: boolean; profileSidebarVisible: boolean; configSidebarVisible: boolean; staticMenuMobileActive: boolean; menuHoverActive: boolean };
    setLayoutState: React.Dispatch<React.SetStateAction<{ staticMenuDesktopInactive: boolean; overlayMenuActive: boolean; profileSidebarVisible: boolean; configSidebarVisible: boolean; staticMenuMobileActive: boolean; menuHoverActive: boolean }>>;
    onMenuToggle: () => void;
    showProfileSidebar: () => void;
}>({} as any);

export const LayoutProvider = (props: { children: React.ReactNode }) => {
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: true,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                overlayMenuActive: !prevLayoutState.overlayMenuActive
            }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
            }));
        } else {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
            }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({
            ...prevLayoutState,
            profileSidebarVisible: !prevLayoutState.profileSidebarVisible
        }));
    };

    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };

    return <LayoutContext.Provider value={value}>{props.children}</LayoutContext.Provider>;
};
