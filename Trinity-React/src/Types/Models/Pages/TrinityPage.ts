import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

export default interface TrinityPage {
    slug: string;
    pageView: string;
    label?: string;
    to?: string;
    icon?: string;
    schema: Array<TrinityWidget>;
}