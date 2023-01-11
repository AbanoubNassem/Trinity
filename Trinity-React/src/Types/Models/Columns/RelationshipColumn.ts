import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface RelationshipColumn extends BaseColumn {
    lazy: boolean;
    lazyItemsCount: number;
    relationshipName?: string;
    foreignColumn?: string;
    foreignTable?: string;
}
