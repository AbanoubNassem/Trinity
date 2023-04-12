import React from 'react';
export declare const LayoutContext: React.Context<{
    layoutConfig: {
        ripple: boolean;
        inputStyle: string;
        menuMode: string;
        colorScheme: string;
        theme: string;
        scale: number;
    };
    layoutState: {
        staticMenuDesktopInactive: boolean;
        overlayMenuActive: boolean;
        profileSidebarVisible: boolean;
        configSidebarVisible: boolean;
        staticMenuMobileActive: boolean;
        menuHoverActive: boolean;
    };
    setLayoutState: React.Dispatch<React.SetStateAction<{
        staticMenuDesktopInactive: boolean;
        overlayMenuActive: boolean;
        profileSidebarVisible: boolean;
        configSidebarVisible: boolean;
        staticMenuMobileActive: boolean;
        menuHoverActive: boolean;
    }>>;
    onMenuToggle: () => void;
    showProfileSidebar: () => void;
}>;
export declare const LayoutProvider: (props: {
    children: React.ReactNode;
}) => JSX.Element;
