import TrinityLayoutType from '@/types/Models/Layouts/TrinityLayoutType';

export interface TabLayoutType extends TrinityLayoutType {
    leftHeaderIcon?: string;
    rightHeaderIcon?: string;
}

export default interface TabsLayoutType extends TrinityLayoutType {
    activeTabIndex?: number;
    scrollable: boolean;
}
