import React, { useContext, useEffect, useMemo, useRef } from 'react';
import axios from 'axios';
import BaseFieldComponent from '@/fields/BaseFieldComponent';
import FieldProps from '@/types/Props/Fields/FieldProps';
import FileUploadField from '@/types/Models/Fields/FileUploadField';
import { classNames } from 'primereact/utils';
import { AppContext } from '@/contexts/AppContext';
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
// @ts-ignore
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview';

// Import the plugin styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.css';

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImageValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginMediaPreview
);
const FileUploadField = ({ configs, resource, component, formData, record, setFieldValue, errors }: FieldProps<FileUploadField>) => {
    const { toast } = useContext(AppContext);
    const pond = useRef<FilePond>(null);

    const getFiles = (): Array<string> => formData[component.columnName]?.split(',')?.filter((e: string) => e !== '') ?? [];

    useEffect(() => {
        setFieldValue(component.columnName, record[component.columnName]);
    }, [record[component.columnName]]);

    return (
        <BaseFieldComponent
            component={component}
            errors={errors}
        >
            <FilePond
                ref={pond}
                id={component.columnName}
                name={component.columnName}
                disabled={component.disabled}
                className={classNames({ 'p-invalid': errors[component.columnName] })}
                instantUpload={component.autoUploads}
                credits={false}
                allowPaste={false}
                allowMultiple={component.multiple}
                acceptedFileTypes={component.fileTypes}
                allowReorder={component.allowReorder}
                allowImageExifOrientation={component.shouldOrientImageFromExif}
                allowImagePreview={component.canPreview}
                allowImageTransform={component.allowImageTransform}
                imageCropAspectRatio={component.imageCropAspectRatio}
                imagePreviewHeight={component.imagePreviewHeight}
                imageResizeTargetHeight={component.imageResizeTargetHeight}
                imageResizeTargetWidth={component.imageResizeTargetWidth}
                imageResizeMode={component.imageResizeMode}
                imageResizeUpscale={component.imageResizeUpscale}
                itemInsertLocation={component.itemInsertLocation}
                labelIdle={component.placeholder ?? 'Drag & Drop your files or <span class="filepond--label-action" tabindex="0">Browse</span>'}
                maxFileSize={component.maxFileSize}
                minFileSize={component.minFileSize}
                styleButtonProcessItemPosition={component.buttonProcessItemPosition}
                styleButtonRemoveItemPosition={component.buttonRemoveItemPosition}
                styleLoadIndicatorPosition={component.loadIndicatorPosition}
                stylePanelAspectRatio={component.panelAspectRatio}
                stylePanelLayout={component.panelLayout}
                styleProgressIndicatorPosition={component.progressIndicatorPosition}
                files={getFiles()?.map((e: string) => {
                    return {
                        source: e,
                        options: {
                            type: 'local'
                        }
                    };
                })}
                server={{
                    url: `/${configs.prefix}`,
                    load: async (source, load, error, progress, abort, headers) => {
                        if (source?.includes('/'))
                            axios({
                                method: 'get',
                                url: source.startsWith('http') ? source : `/${source}`,
                                responseType: 'blob',
                                onDownloadProgress: (e) => {
                                    progress(e.download ?? false, e.loaded, e.total ?? 0);
                                }
                            })
                                .then((response) => {
                                    load(response.data);
                                })
                                .catch((err) => error(err));
                    },

                    remove: (source, load, error) => {
                        axios
                            .post(`/${configs.prefix}/delete/file`, {
                                UniqueFileIdOrUrl: source,
                                resourceName: resource?.pluralLabel.toLowerCase() ?? '',
                                fieldName: component.columnName,
                                reverting: false
                            })
                            .then(() => {
                                setFieldValue(
                                    component.columnName,
                                    getFiles()
                                        .filter((f: string) => f !== source)
                                        .join(',')
                                );
                                load();
                            })
                            .catch((err) => error(err));
                    },
                    revert: (uniqueFileId, load, error) => {
                        axios
                            .post(`/${configs.prefix}/delete/file`, {
                                UniqueFileIdOrUrl: uniqueFileId,
                                resourceName: resource?.pluralLabel.toLowerCase() ?? '',
                                fieldName: component.columnName,
                                reverting: true
                            })
                            .then(() => {
                                setFieldValue(
                                    component.columnName,
                                    getFiles()
                                        .filter((f: string) => f !== uniqueFileId)
                                        .join(',')
                                );
                                load();
                            })
                            .catch((err) => error(err));
                    },

                    process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                        const uploadData = new FormData();
                        uploadData.append('file', file, file.name);
                        uploadData.append('resourceName', resource?.pluralLabel.toLowerCase() ?? '');
                        uploadData.append('fieldName', component.columnName);

                        const cancelToken = axios.CancelToken.source();

                        axios
                            .post(`/${configs.prefix}/upload/file`, uploadData, {
                                cancelToken: cancelToken.token,
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                                onUploadProgress: (e) => {
                                    progress(e.upload ?? false, e.loaded, e.total ?? 0);
                                }
                            })
                            .then(({ data }) => {
                                if (data['data'] !== null) {
                                    const files = getFiles();
                                    files.push(data['data']);
                                    setFieldValue(component.columnName, files.join(','));
                                    load(data['data']);
                                } else {
                                    error(data['notifications']);
                                }
                                toast?.current?.show(data['notifications'] as any);
                            })
                            .catch((er) => error(er));

                        return {
                            abort: () => {
                                cancelToken.cancel('Operation canceled by the user.');
                                abort();
                            }
                        };
                    }
                }}
                // @ts-ignore
                uploadProgressIndicatorPosition={component.uploadProgressIndicatorPosition}
                removeUploadedFileButtonPosition={component.removeUploadedFileButtonPosition}
                allowVideoPreview={component.canPreview}
                allowAudioPreview={component.canPreview}
            />
        </BaseFieldComponent>
    );
};

export default FileUploadField;
