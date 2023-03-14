import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

export default interface TrinityPage<T> {
    slug: string;
    pageView: string;
    label?: string;
    icon?: string;
    schema: Array<TrinityWidget>;
    data?: T;
}
