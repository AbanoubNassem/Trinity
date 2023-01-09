import BaseColumn from '@/types/Models/Columns/BaseColumn';

export default interface ImageColumn extends BaseColumn {
    alt?: string;
    width?: string;
    height: string;
    isCircular: boolean;
    isPreviewable: boolean;
    isDownloadable: boolean;
}
