import { BadgeProps } from 'primereact/badge';
import TrinityComponentType from '@/types/Models/TrinityComponentType.ts';

export default interface TrinityPageType {
    slug: string;
    pageView: string;
    label?: string;
    icon?: string;
    schema: Array<TrinityComponentType>;
    canView: boolean;
    badge?: BadgeProps;
}
