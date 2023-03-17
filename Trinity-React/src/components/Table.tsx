import React, { useEffect, useRef, useState } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { DataTable, DataTableFilterEvent, DataTableFilterMeta, DataTablePageEvent, DataTableSortEvent, DataTableSortMeta } from 'primereact/datatable';
import { useConfigs } from '@/hooks/trinity_configs';
import { Column } from 'primereact/column';
import { router } from '@inertiajs/react';
import { Skeleton } from 'primereact/skeleton';
import { InputText } from 'primereact/inputtext';
import debounce from 'lodash/debounce';
import { useUrlParams } from '@/hooks/trinity_url_params';
import { FilterMatchMode } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import { trinityLink } from '@/utilities/trinity_link';
import BaseColumnComponent from '@/columns/BaseColumnComponent';
import IPaginator from '@/types/Models/Paginator';
import { Dialog } from 'primereact/dialog';
import trinityApp from '@/TrinityApp';
import { useLocalize } from '@/hooks/trinity_localizer';

const Table = () => {
    const configs = useConfigs();
    const localize = useLocalize();
    const { resource, data: paginator } = usePageProps<IPaginator<any>>();
    const resourceColumns = resource?.columns ?? [];
    const urlParams = useUrlParams();
    const [loading, setLoading] = useState(false);
    const dtRef = useRef<DataTable<Array<any>>>(null);
    const globalSearchInput = useRef<HTMLInputElement>(null);
    const toggleableFieldsDiv = useRef<HTMLDivElement>();
    const toggleableMultiSelect = useRef<MultiSelect>(null);
    const [selectedItems, setSelectedItems] = useState<Array<any>>([]);
    const [deleteDialog, showDeleteDialog] = useState(false);
    const [selectedItemToDelete, setSelectedItemToDelete] = useState(null);

    useEffect(() => {
        if (globalSearchInput.current && !loading) globalSearchInput.current.value = urlParams.globalSearch;
    }, [loading, paginator]);

    const toggleableColumns = resourceColumns.flatMap((f) => {
        if (f.toggleable) {
            return {
                field: f.columnName,
                header: f.label,
                isToggledHiddenByDefault: f.isToggledHiddenByDefault
            };
        }

        return [];
    });

    const [selectedColumns, setSelectedColumns] = useState(toggleableColumns.filter((col) => !col.isToggledHiddenByDefault));

    const columns = resourceColumns.filter((f) => !f.toggleable || selectedColumns.find((el) => el.field === f.columnName));

    let tableEvent: DataTablePageEvent | DataTableSortEvent | DataTableFilterEvent | any = undefined;
    const onTableEvent = (e: DataTablePageEvent | DataTableSortEvent) => {
        tableEvent = e as any;
        fetchTable();
    };

    const onGlobalSearchInput = debounce(() => fetchTable(), 300);

    const multiSortMeta = Array<DataTableSortMeta>();
    for (const sortable of JSON.parse(urlParams.sort) ?? []) {
        multiSortMeta.push({
            field: sortable.field,
            order: sortable.order
        });
    }

    let filters: DataTableFilterMeta = {};
    const urlFilters = JSON.parse(urlParams.columnsSearch) ?? {};
    resourceColumns.forEach((field) => {
        if (field.customFilter || (field.searchable && !field.isGloballySearchable)) {
            filters[field.columnName] = {
                value: urlFilters[field.columnName],
                matchMode: FilterMatchMode.CUSTOM
            };
        }
    });

    const onFilter = debounce((ev: DataTableFilterEvent) => {
        filters = {};
        Object.entries(ev.filters).forEach((el: any) => {
            filters[el[0]] = el[1];
        });
        fetchTable();
    }, 300);

    const fetchTable = () => {
        let data = {} as any;

        data.page = tableEvent === undefined || tableEvent.page === undefined ? paginator?.currentPage ?? 1 : tableEvent.page + 1;

        data.perPage = tableEvent?.rows ?? paginator?.perPage ?? 10;

        if (tableEvent?.multiSortMeta) {
            const sorts = JSON.stringify(tableEvent.multiSortMeta);

            if (sorts.length > 2) {
                data.sort = sorts;
            }
        }

        if (globalSearchInput.current?.value) {
            data.globalSearch = globalSearchInput.current.value;
        }

        if (filters) {
            const columnsSearch = {} as any;
            Object.entries(filters).forEach(([k, filter]) => {
                if ('value' in filter && filter.value) {
                    columnsSearch[k] = filter.value;
                }
            });
            if (Object.keys(columnsSearch).length) data.columnsSearch = JSON.stringify(columnsSearch);
        }

        router.get(`/${configs.prefix}/${resource?.pluralLabel.toLowerCase()}`, data, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onStart: () => setLoading(true),
            onFinish: () => {
                setLoading(false);
            }
        });
    };

    const showClearFilters = globalSearchInput.current?.value || tableEvent?.multiSortMeta || !!Object.entries(filters).filter(([, v]) => (v as any).value).length;

    function clearFilters() {
        filters = {};
        globalSearchInput.current!.value = '';
        tableEvent = undefined as any;
        fetchTable();
    }

    let exportableFields = resourceColumns.filter((f) => f.exportable);
    const exportCSV = (event: any) => {
        dtRef.current?.exportCSV(event);
    };

    const deleteDialogFooter = (
        <React.Fragment>
            <Button
                label={localize('no')}
                icon="pi pi-times"
                className="p-button-text"
                onClick={() => {
                    showDeleteDialog(false);
                    setSelectedItemToDelete(null);
                }}
            />
            <Button
                label={localize('yes')}
                icon="pi pi-check"
                className="p-button-text"
                onClick={() => {
                    if (selectedItemToDelete !== null || selectedItems !== null) {
                        router.delete('', {
                            data: {
                                [resource?.primaryKeyColumn ?? 'id']: selectedItemToDelete !== null ? [String(selectedItemToDelete![resource?.primaryKeyColumn ?? 'id'])] : selectedItems!.map((r: any) => String(r[resource?.primaryKeyColumn ?? 'id']))
                            },
                            preserveState: true,
                            preserveScroll: true
                        });
                    }
                    setSelectedItems([]);
                    setSelectedItemToDelete(null);
                    showDeleteDialog(false);
                }}
            />
        </React.Fragment>
    );

    const toolbarLeftContents = <React.Fragment></React.Fragment>;

    const toolbarRightContents = (
        <React.Fragment>
            <Button
                className="p-button-success mx-2"
                icon="pi pi-plus"
                label={localize('create')}
                onClick={() => trinityLink(`/${configs.prefix}/${resource?.name}/create`)}
            />
            <Button
                className="p-button-danger"
                icon="pi pi-trash"
                label={localize('delete')}
                disabled={selectedItems.length === 0}
                onClick={() => {
                    if (selectedItems.length) showDeleteDialog(true);
                }}
            />
        </React.Fragment>
    );

    const header = (
        <div className="flex justify-content-between flex-column sm:flex-row">
            <div className="flex mb-3">
                {!!exportableFields.length && (
                    <Button
                        icon="pi pi-external-link"
                        className="p-button-primary  mx-2"
                        label={localize('export')}
                        onClick={exportCSV}
                    />
                )}
                {showClearFilters && (
                    <Button
                        type="button"
                        icon="pi pi-filter-slash"
                        label={localize('clear')}
                        className="p-button-outlined"
                        onClick={clearFilters}
                    />
                )}
            </div>
            <div className="flex">
                <div>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            ref={globalSearchInput}
                            placeholder={localize('keyword_search')}
                            onChange={onGlobalSearchInput}
                        />
                        {globalSearchInput.current && globalSearchInput.current.value && loading && <i className="pi pi-spin pi-spinner global-search-icon" />}
                    </span>
                </div>

                <div
                    id="toggleableFields"
                    className="mx-2"
                    ref={toggleableFieldsDiv as any}
                >
                    {toggleableColumns.length > 0 && (
                        <>
                            <Button
                                className="p-button-rounded p-button-text"
                                icon="pi pi-table"
                                onClick={() => toggleableMultiSelect.current!.show()}
                            />

                            <MultiSelect
                                ref={toggleableMultiSelect}
                                appendTo={toggleableFieldsDiv.current}
                                className="hidden"
                                optionLabel="header"
                                panelClassName="toggleableFields"
                                options={toggleableColumns}
                                value={selectedColumns}
                                multiple
                                onChange={(val) => {
                                    setSelectedColumns(val.value);
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );

    const actionBodyTemplate = (rowData: any) => {
        return (
            <>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success mx-2"
                    onClick={() => {
                        trinityLink(`/${configs?.prefix}/${resource?.name}/edit/${rowData[resource?.primaryKeyColumn!]}`, false, false);
                    }}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => {
                        setSelectedItemToDelete(rowData);
                        showDeleteDialog(true);
                    }}
                />
            </>
        );
    };

    return (
        <>
            <Toolbar
                start={toolbarLeftContents}
                end={toolbarRightContents}
            />

            <DataTable
                ref={dtRef}
                dataKey={resource?.primaryKeyColumn ?? 'id'}
                selection={selectedItems}
                onSelectionChange={(e) => setSelectedItems(e.value as any)}
                header={header}
                size={'small'}
                first={(paginator!.currentPage - 1) * paginator!.perPage}
                lazy
                loading={loading}
                multiSortMeta={multiSortMeta}
                paginator
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rows={paginator?.perPage}
                rowsPerPageOptions={configs.rowsPerPageOptions}
                showGridlines={resource?.showGridlines}
                stripedRows={resource?.stripedRows}
                totalRecords={paginator?.totalCount}
                value={paginator?.data}
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                filterDisplay="menu"
                globalFilter={'contains'}
                removableSort
                sortMode="multiple"
                onSort={onTableEvent}
                onPage={onTableEvent}
                onFilter={onFilter}
                filters={filters}
            >
                <Column
                    exportable={false}
                    selectionMode="multiple"
                    style={{ width: '3rem' }}
                    filter={false}
                />
                {columns.map((column) => {
                    const body = (data: any) => {
                        return loading ? (
                            <Skeleton />
                        ) : (
                            <BaseColumnComponent
                                resource={resource!}
                                column={column}
                                columnValue={data[column.columnName]}
                                record={data}
                                localize={localize}
                            >
                                {trinityApp.registeredColumns?.has(column.componentName) ? (
                                    trinityApp.registeredColumns?.get(column.componentName)!({
                                        column,
                                        columnValue: data[column.columnName] ?? data['defaultValue'],
                                        record: data,
                                        resource: resource!
                                    })
                                ) : (
                                    <div>{data[column.columnName] ?? data['defaultValue']}</div>
                                )}
                            </BaseColumnComponent>
                        );
                    };

                    return (
                        <Column
                            key={column.columnName}
                            body={body}
                            field={column.columnName}
                            header={column.label}
                            sortable={column.sortable}
                            // showFilterMenu={false}
                            showFilterMatchModes={false}
                            // showFilterOperator={false}
                            showClearButton
                            filterMatchMode={'custom'}
                            excludeGlobalFilter={!column.isGloballySearchable}
                            filterField={column.columnName}
                            style={{ minWidth: '8rem' }}
                            exportable={column.exportable}
                            hidden={column.hidden}
                            filter={!!column.customFilter || (column.searchable && !column.isGloballySearchable)}
                            filterPlaceholder={column.searchPlaceholder ?? localize('search_by', column.label)}
                            filterElement={
                                !!column.customFilter
                                    ? (options) => {
                                          return (
                                              <div>
                                                  {trinityApp.registeredComponents?.has(column.customFilter!.componentName) ? (
                                                      trinityApp.registeredComponents?.get(column.customFilter!.componentName)!({
                                                          key: `${column.columnName}_filter`,
                                                          component: column.customFilter!,
                                                          setFieldValue: (name: string, value: any) => {
                                                              options.filterCallback(value);
                                                          },
                                                          formData: { [column.columnName]: options.value },
                                                          errors: {}
                                                      })
                                                  ) : (
                                                      <>{column.customFilter!.componentName}</>
                                                  )}
                                              </div>
                                          );
                                      }
                                    : undefined
                            }
                        />
                    );
                })}
                <Column
                    body={loading ? <Skeleton /> : actionBodyTemplate}
                    headerStyle={{ minWidth: '10rem' }}
                    filter={false}
                ></Column>
            </DataTable>

            <Dialog
                visible={deleteDialog}
                style={{ width: '450px' }}
                header={localize('confirm')}
                modal
                footer={deleteDialogFooter}
                onHide={() => {
                    showDeleteDialog(false);
                    setSelectedItemToDelete(null);
                }}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: '2rem' }}
                    />
                    {selectedItemToDelete && <span dangerouslySetInnerHTML={{ __html: localize('are_you_sure_to_delete', selectedItemToDelete[resource?.titleColumn ?? 'id']) }} />}
                    {selectedItemToDelete === null && selectedItems.length && <span dangerouslySetInnerHTML={{ __html: localize('are_you_sure_to_delete_selected_records', selectedItems.length.toString()) }} />}
                </div>
            </Dialog>
        </>
    );
};
export default Table;
