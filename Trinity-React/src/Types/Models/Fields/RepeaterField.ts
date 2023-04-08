import TrinityField from '@/types/Models/Fields/TrinityField';
import BaseComponent from '@/types/Models/TrinityComponent';

export default interface RepeaterField extends TrinityField {
    schema?: Array<BaseComponent>;
    isCollapsible: boolean;
    canCreateItem: boolean;
    canDeleteItem: boolean;
    canMoveItem: boolean;
}
