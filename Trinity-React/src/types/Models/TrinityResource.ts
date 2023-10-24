import TrinityComponentType from '@/types/Models/TrinityComponentType';
import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';
import TrinityWidgetType from '@/types/Models/Widgets/TrinityWidgetType';
import TrinityActionType from '@/types/Models/Actions/TrinityActionType';
import { BadgeProps } from 'primereact/badge';

export default interface TrinityResource {
    name: string;
    primaryKeyColumn: string;
    label: string;
    pluralLabel: string;
    icon: string;
    showGridlines: boolean;
    stripedRows: boolean;
    schema?: Array<TrinityComponentType>;
    columns?: Array<TrinityColumnType>;
    actions?: Array<TrinityActionType>;
    bulkActions?: Array<TrinityActionType>;
    titleColumn: string;
    topWidgets?: Array<TrinityWidgetType>;
    bottomWidgets?: Array<TrinityWidgetType>;
    canView: boolean;
    canCreate: boolean;
    canUpdate: boolean;
    canDelete: boolean;
    badge?: BadgeProps;
}
