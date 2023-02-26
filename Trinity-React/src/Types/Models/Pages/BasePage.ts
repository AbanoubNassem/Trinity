import BaseWidget from '@/types/Models/Widgets/BaseWidget';

export default interface BasePage {
    pageName: string;
    label?: string;
    to?: string;
    icon?: string;
    schema: Array<BaseWidget>;
}
