import TrinityFieldType from '@/types/Models/Fields/TrinityFieldType';
import BaseComponent from '@/types/Models/TrinityComponentType';

export default interface RepeaterFieldType extends TrinityFieldType {
    schema?: Array<BaseComponent>;
    isCollapsible: boolean;
    canCreateItem: boolean;
    canDeleteItem: boolean;
    canMoveItem: boolean;
}
