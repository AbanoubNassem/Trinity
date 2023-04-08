import TrinityField from '@/types/Models/Fields/TrinityField';

export default interface FileUploadField extends TrinityField {
    multiple: boolean;
    allowReorder?: boolean;
    autoUploads: boolean;
    icon: string;
    fileTypes?: string[];
    maximumFileSize?: number;
    maxFileSize?: string | null;
    minimumFileSize?: number;
    minFileSize?: string | null;
    shouldOrientImageFromExif: boolean;
    canPreview: boolean;
    allowImageTransform: boolean;
    imageCropAspectRatio?: string;
    imagePreviewHeight?: number;
    imageResizeTargetHeight?: number;
    imageResizeTargetWidth?: number;
    imageResizeMode?: 'force' | 'cover' | 'contain';
    imageResizeUpscale: boolean;
    itemInsertLocation?: 'before' | 'after';
    buttonProcessItemPosition?: string;
    buttonRemoveItemPosition?: string;
    removeUploadedFileButtonPosition?: string;
    loadIndicatorPosition?: string;
    panelAspectRatio?: string;
    panelLayout?: 'integrated' | 'compact' | 'circle' | 'integrated circle' | 'compact circle' | null;
    progressIndicatorPosition?: string;
    uploadProgressIndicatorPosition?: string;
    canDownload:boolean;
}
