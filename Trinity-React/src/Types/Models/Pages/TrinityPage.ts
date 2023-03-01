import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

export default interface TrinityPage {
    pageName: string;
    label?: string;
    to?: string;
    icon?: string;
    schema: Array<TrinityWidget>;
}
