import TrinityComponent from '@/types/Models/TrinityComponent';
import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';
import TrinityAction from '@/types/Models/Actions/TrinityAction';
export default interface TrinityResource {
    name: string;
    primaryKeyColumn: string;
    label: string;
    pluralLabel: string;
    icon: string;
    showGridlines: boolean;
    stripedRows: boolean;
    schema?: Array<TrinityComponent>;
    columns?: Array<TrinityColumn>;
    actions?: Array<TrinityAction>;
    bulkActions?: Array<TrinityAction>;
    titleColumn: string;
    topWidgets?: Array<TrinityWidget>;
    bottomWidgets?: Array<TrinityWidget>;
    canView: boolean;
    canCreate: boolean;
    canUpdate: boolean;
    canDelete: boolean;
}
