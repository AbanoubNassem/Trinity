import BaseLayout from '@/types/Models/Layouts/BaseLayout';

export interface TabLayout extends BaseLayout {
    leftHeaderIcon?: string;
    rightHeaderIcon?: string;
}

export default interface TabsLayout extends BaseLayout {
    activeTabIndex?: number;
    scrollable: boolean;
}
