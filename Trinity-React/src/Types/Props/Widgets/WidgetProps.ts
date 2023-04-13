import TrinityResource from '@/types/Models/TrinityResource';
import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';
import Configs from '@/types/Models/Configs';

export default interface WidgetProps<T extends TrinityWidget> {
    configs: Configs;
    resource?: TrinityResource;
    widget: T;
    localize: (key: string, ...args: Array<string>) => string;
}
