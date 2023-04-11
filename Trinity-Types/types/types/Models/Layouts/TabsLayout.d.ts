import TrinityLayout from '@/types/Models/Layouts/TrinityLayout';
export interface TabLayout extends TrinityLayout {
    leftHeaderIcon?: string;
    rightHeaderIcon?: string;
}
export default interface TabsLayout extends TrinityLayout {
    activeTabIndex?: number;
    scrollable: boolean;
}
