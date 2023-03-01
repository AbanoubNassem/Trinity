import TrinityColumn from '@/types/Models/Columns/TrinityColumn';

export default interface BadgeColumn extends TrinityColumn {
    options?: Array<{ value: any; icon: string; severity?: string }>;
}
