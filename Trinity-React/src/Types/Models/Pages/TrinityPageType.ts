import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';
import { BadgeProps } from 'primereact/badge';

export default interface TrinityPageType {
    slug: string;
    pageView: string;
    label?: string;
    icon?: string;
    schema: Array<TrinityWidgetType>;
    canView: boolean;
    badge?: BadgeProps;
}
