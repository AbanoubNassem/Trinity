import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface RelationshipColumn extends BaseColumn {
    relationshipName?: string;
    foreignColumn?: string;
    foreignTable?: string;
}
