import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';
import { BadgeProps } from 'primereact/badge';

export default interface TrinityPage {
    slug: string;
    pageView: string;
    label?: string;
    icon?: string;
    schema: Array<TrinityWidget>;
    canView: boolean;
    badge?: BadgeProps;
}
