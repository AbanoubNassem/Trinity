import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

export default interface RelationshipColumnType extends TrinityColumnType {
    relationshipName?: string;
    foreignColumn?: string;
    foreignTable?: string;
}
