import TrinityColumn from '@/types/Models/Columns/TrinityColumn';

export default interface RelationshipColumn extends TrinityColumn {
    relationshipName?: string;
    foreignColumn?: string;
    foreignTable?: string;
}
