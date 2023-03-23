import BaseComponent from '@/types/Models/TrinityComponent';
import TrinityColumn from '@/types/Models/Columns/TrinityColumn';
import TrinityWidget from '@/types/Models/Widgets/TrinityWidget';

export default interface TrinityResource {
    name: string;
    primaryKeyColumn: string;
    label: string;
    pluralLabel: string;
    icon: string;
    showGridlines: boolean;
    stripedRows: boolean;
    schema?: Array<BaseComponent>;
    columns?: Array<TrinityColumn>;
    titleColumn: string;
    topWidgets?: Array<TrinityWidget>;
    bottomWidgets?: Array<TrinityWidget>;
    canView: boolean;
    canCreate: boolean;
    canUpdate: boolean;
    canDelete: boolean;
}
