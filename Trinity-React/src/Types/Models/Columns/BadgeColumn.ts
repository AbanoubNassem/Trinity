import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface BadgeColumn extends BaseColumn {
    options?: Array<{ value: any; icon: string; severity?: string }>;
}
