import BaseField from '@/types/Models/Fields/BaseField';
import { FileUploadModeType } from 'primereact/fileupload';

export default interface FileUploadField extends BaseField {
    template: FileUploadModeType;
    multiple: boolean;
    autoUploads: boolean;
    icon: string;
    fileTypes?: string;
    maximumFileSize?: number;
}
