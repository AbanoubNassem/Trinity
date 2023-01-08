import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface TextColumn extends BaseColumn {
    url?: string;
    openUrlInNewTab: boolean;
    dateTimeFormat?: string;
    timeAgo: boolean;
    currency?: string;
}
