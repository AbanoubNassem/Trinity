import TrinityResource from '@/types/Models/TrinityResource';
import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';
import Configs from '@/types/Models/Configs';

export default interface WidgetProps<T extends TrinityWidgetType> {
    configs: Configs;
    resource?: TrinityResource;
    widget: T;
    localize: (key: string, ...args: Array<string>) => string;
}
