import FieldProps from '@/types/Props/Fields/FieldProps';
import FileUploadField from '@/types/Models/Fields/FileUploadField';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.css';
declare const FileUploadField: ({ configs, resource, component, formData, record, setFieldValue, errors }: FieldProps<FileUploadField>) => JSX.Element;
export default FileUploadField;
