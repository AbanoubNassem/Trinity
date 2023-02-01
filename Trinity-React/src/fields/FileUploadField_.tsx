// import React, { useContext, useRef, useState } from 'react';
// import axios from 'axios';
// import BaseFieldComponent from '@/fields/BaseFieldComponent';
// import FieldProps from '@/types/Props/Fields/FieldProps';
// import FileUploadField from '@/types/Models/Fields/FileUploadField';
// import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectParams, ItemTemplateOptions, FileUploadHandlerParam } from 'primereact/fileupload';
// import { classNames } from 'primereact/utils';
// import { ProgressBar } from 'primereact/progressbar';
// import { Button } from 'primereact/button';
// import { Tag } from 'primereact/tag';
// import usePageProps from '@/hooks/trinity_page_props';
// import { useConfigs } from '@/hooks/trinity_configs';
// import { AppContext } from '@/contexts/AppContext';
//
// const FileUploadField = ({ component, formData, setFieldValue, errors }: FieldProps<FileUploadField>) => {
//     const { toast } = useContext(AppContext);
//     const configs = useConfigs();
//     const { resource } = usePageProps();
//
//     const fileUploadRef = useRef<FileUpload>(null);
//     const [totalSize, setTotalSize] = useState(0);
//
//     let headerTemplate = undefined;
//     let itemTemplate = undefined;
//     let emptyTemplate = undefined;
//     let chooseOptions = undefined;
//     let uploadOptions = undefined;
//     let cancelOptions = undefined;
//
//     const uploadHandler = (e: FileUploadHandlerParam) => {
//         if (e.files.length <= 0) return;
//         const form = new FormData();
//         e.files.forEach((f) => form.append('files', f));
//         form.append('resourceName', resource?.pluralLabel.toLowerCase() ?? '');
//         form.append('fieldName', component.columnName);
//
//         axios
//             .post(`/${configs.prefix}/upload`, form, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })
//             .then(({ data }) => {
//                 toast?.current?.show(data['notifications'] as any);
//             });
//     };
//     const onTemplateSelect = (e: FileUploadSelectParams) => {
//         let _totalSize = component.multiple ? totalSize : 0;
//
//         Object.values(e.files).forEach((file) => {
//             _totalSize += file.size;
//         });
//
//         // if (component.maximumFileSize && _totalSize >= component.maximumFileSize) return;
//         setTotalSize(_totalSize);
//     };
//     const onTemplateRemove = (file: any, callback: any) => {
//         setTotalSize(totalSize - file.size);
//         callback();
//     };
//
//     if ((component.template as string) === 'detailed') {
//         headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
//             const { className, chooseButton, uploadButton, cancelButton } = options;
//             const value = (totalSize / (component.maximumFileSize ?? 1)) * 100;
//             const formattedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';
//             const formattedMax = fileUploadRef.current?.formatSize(component.maximumFileSize ?? 0);
//
//             return (
//                 <div
//                     className={className}
//                     style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}
//                 >
//                     <div>
//                         {chooseButton}
//                         {uploadButton}
//                         {cancelButton}
//                     </div>
//                     {component.maximumFileSize && (
//                         <ProgressBar
//                             value={value}
//                             displayValueTemplate={() => `${formattedValue} / ${formattedMax}`}
//                             style={{ width: '300px', height: '20px', marginLeft: 'auto' }}
//                         />
//                     )}
//                 </div>
//             );
//         };
//
//         itemTemplate = (file: any, props: ItemTemplateOptions) => {
//             return (
//                 <div className="flex align-items-center flex-wrap">
//                     <div
//                         className="flex align-items-center"
//                         style={{ width: '40%' }}
//                     >
//                         <img
//                             alt={file.name}
//                             role="presentation"
//                             src={file.objectURL}
//                             width={100}
//                         />
//                         <span className="flex flex-column text-left ml-3">
//                             {file.name}
//                             <small>{new Date().toLocaleDateString()}</small>
//                         </span>
//                     </div>
//                     <Tag
//                         value={props.formatSize}
//                         severity="warning"
//                         className="px-3 py-2"
//                     />
//                     <Button
//                         type="button"
//                         icon="pi pi-times"
//                         className="w-3rem p-button-outlined p-button-rounded p-button-danger ml-auto"
//                         onClick={() => onTemplateRemove(file, props.onRemove)}
//                     />
//                 </div>
//             );
//         };
//
//         emptyTemplate = () => {
//             return (
//                 <div className="flex align-items-center flex-column">
//                     <i
//                         className={`${component.icon} mt-3 p-5`}
//                         style={{
//                             fontSize: '5em',
//                             borderRadius: '50%',
//                             backgroundColor: 'var(--surface-b)',
//                             color: 'var(--surface-d)'
//                         }}
//                     ></i>
//                     <span
//                         style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }}
//                         className="my-5"
//                     >
//                         Drag and Drop Here
//                     </span>
//                 </div>
//             );
//         };
//
//         chooseOptions = {
//             icon: 'pi pi-fw pi-images',
//             iconOnly: true,
//             className: 'w-3rem custom-choose-btn p-button-rounded p-button-outlined'
//         };
//         uploadOptions = {
//             icon: 'pi pi-fw pi-cloud-upload',
//             iconOnly: true,
//             className: 'w-3rem custom-upload-btn p-button-success p-button-rounded p-button-outlined'
//         };
//         cancelOptions = {
//             icon: 'pi pi-fw pi-times',
//             iconOnly: true,
//             className: 'w-3rem custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'
//         };
//     }
//
//     return (
//         <BaseFieldComponent
//             component={component}
//             errors={errors}
//         >
//             <FileUpload
//                 ref={fileUploadRef}
//                 id={component.columnName}
//                 name={component.columnName}
//                 disabled={component.disabled}
//                 className={classNames({ 'p-invalid': errors[component.columnName] })}
//                 multiple={component.multiple}
//                 auto={component.autoUploads}
//                 accept={component.fileTypes}
//                 maxFileSize={component.maximumFileSize}
//                 mode={(component.template as string) === 'detailed' ? undefined : component.template}
//                 headerTemplate={headerTemplate}
//                 itemTemplate={itemTemplate}
//                 emptyTemplate={emptyTemplate}
//                 chooseOptions={chooseOptions}
//                 uploadOptions={uploadOptions}
//                 cancelOptions={cancelOptions}
//                 onSelect={onTemplateSelect}
//                 onClear={() => setTotalSize(0)}
//                 onError={() => setTotalSize(0)}
//                 customUpload
//                 uploadHandler={uploadHandler}
//             />
//         </BaseFieldComponent>
//     );
// };
//
// export default FileUploadField;
