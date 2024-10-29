import { useEffect, useRef } from 'react';
import axios from 'axios';
import FieldProps from '@/types/Props/Fields/FieldProps';
import FileUploadFieldType from '@/types/Models/Fields/FileUploadFieldType';
import { classNames } from 'primereact/utils';
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
import trinityApp from '@/TrinityApp';
import { FilePondFile, FileOrigin } from 'filepond';

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
const FileUploadField = ({ configs, resource, component, formData, record, setFieldValue, errors }: FieldProps<FileUploadFieldType>) => {
    const pond = useRef<FilePond>(null);

    const getFiles = (): Array<string> => formData[component.columnName]?.split(',')?.filter((e: string) => e !== '') ?? [];

    useEffect(() => {
        setFieldValue(component.columnName, record[component.columnName]);
    }, [record[component.columnName]]);

    const getOpenLink = (file: FilePondFile) => {
        let fileSource = file.source;

        if (!fileSource) {
            return;
        }
        const src = fileSource as string;
        const anchor = document.createElement('a');
        anchor.className = 'pi pi-external-link mx-2 text-white text-sm pointer-events-auto hover:bg-black-alpha-70';
        anchor.href = src.startsWith('http') ? src : `/${src}`;
        anchor.target = '_blank';

        return anchor;
    };
    const insertOpenLink = (file: FilePondFile) => {
        if (file.origin !== FileOrigin.LOCAL) {
            return;
        }

        const anchor = getOpenLink(file);

        if (!anchor) {
            return;
        }

        document.getElementById(`filepond--item-${file.id}`)?.querySelector('.filepond--file-info-main')?.prepend(anchor);
    };

    const getDownloadLink = (file: FilePondFile) => {
        let fileSource = file.source;

        if (!fileSource) {
            return;
        }

        const src = fileSource as string;
        const anchor = document.createElement('a');
        anchor.className = 'pi pi-download mx-2 text-white text-base pointer-events-auto hover:bg-black-alpha-70';
        anchor.href = src.startsWith('http') ? src : `/${src}`;
        anchor.download = file.file.name;

        return anchor;
    };
    const insertDownloadLink = (file: FilePondFile) => {
        if (file.origin !== FileOrigin.LOCAL) {
            return;
        }

        const anchor = getDownloadLink(file);

        if (!anchor) {
            return;
        }

        document.getElementById(`filepond--item-${file.id}`)?.querySelector('.filepond--file-info-main')?.prepend(anchor);
    };

    return (
        <FilePond
            ref={pond}
            id={component.columnName}
            name={component.columnName}
            disabled={component.disabled}
            className={classNames({ 'p-invalid': errors[component.columnName] })}
            instantUpload={component.autoUploads}
            credits={false}
            allowPaste={false}
            required={component.isRequired}
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
                url: `${configs.prefix}`,
                load: async (source, load, error, progress, abort, _headers) => {
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
                    else abort();
                },

                remove: (source, load, error) => {
                    axios
                        .post(`${configs.prefix}/delete/file`, {
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
                        .post(`${configs.prefix}/delete/file`, {
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

                process: (_fieldName, file, _metadata, load, error, progress, abort, _transfer, _options) => {
                    const uploadData = new FormData();
                    uploadData.append('file', file, file.name);
                    uploadData.append('resourceName', resource?.pluralLabel.toLowerCase() ?? '');
                    uploadData.append('fieldName', component.columnName);

                    const cancelToken = axios.CancelToken.source();

                    axios
                        .post(`${configs.prefix}/upload/file`, uploadData, {
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
                            // trinityApp. toast?.current?.show(data['notifications'] as any);
                            trinityApp.toast?.show(data['notifications'] as any);
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
            onaddfile={(_err, file) => {
                if (component.canPreview) insertOpenLink(file);
                if (component.canDownload) insertDownloadLink(file);
            }}
        />
    );
};

export default FileUploadField;
