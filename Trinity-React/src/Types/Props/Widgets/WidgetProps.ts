import Resource from '@/types/Models/Resource';
import BaseWidget from '@/types/Models/Widgets/BaseWidget';

export default interface WidgetProps<T extends BaseWidget> {
    resource: Resource;
    widget: T;
}
