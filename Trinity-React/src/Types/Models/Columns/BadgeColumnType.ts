import TrinityColumnType from '@/types/Models/Columns/TrinityColumnType';

export default interface BadgeColumnType extends TrinityColumnType {
    options?: Array<{ key: any; value: any; icon: string; severity?: string }>;
}
