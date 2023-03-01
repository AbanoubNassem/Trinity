import TrinityResource from '@/types/Models/TrinityResource';
import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

export default interface WidgetProps<T extends TrinityWidget> {
    resource?: TrinityResource;
    widget: T;
}
