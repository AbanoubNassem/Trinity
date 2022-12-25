import React, { useEffect, useRef, useState } from 'react';
import usePageProps from '@/hooks/trinity_page_props';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { DataTable, DataTableFilterMeta, DataTablePFSEvent, DataTableSortMeta, DataTableSortParams } from 'primereact/datatable';
import IPaginator from '@/Types/Models/Paginator';
import { useConfigs } from '@/hooks/trinity_configs';
import { useTrinityFields } from '@/hooks/trinity_resource_fields';
import { Column } from 'primereact/column';
import { Inertia } from '@inertiajs/inertia';
import { Skeleton } from 'primereact/skeleton';
import { InputText } from 'primereact/inputtext';
import debounce from 'lodash/debounce';
import { useUrlParams } from '@/hooks/trinity_url_params';
import { FilterMatchMode } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import { trinityLink } from '@/utilities/trinity_link';

const Table = () => {
    const configs = useConfigs();
    const { resource, data: paginator } = usePageProps<IPaginator<any>>();
    const fields = useTrinityFields();
    const urlParams = useUrlParams();
    const [loading, setLoading] = useState(false);
    const dtRef = useRef<DataTable>(null);
    const globalSearchInput = useRef<HTMLInputElement>(null);
    const toggleableFieldsDiv = useRef<HTMLDivElement>();
    const toggleableMultiSelect = useRef<MultiSelect>(null);
    const [selectedItems, setSelectedItems] = useState(null);

    const items = Array<any>();
    for (const it of paginator?.data ?? []) {
        let item = {} as any;
        for (const field of fields) {
            if (field.relationshipName) {
                const relations = field.relationshipName.split('.');
                let record = it;

                for (let i = 0; i < relations.length; i++) {
                    if (record === null) continue;
                    record = record[relations[i]];
                }

                item[field.columnName] = record !== null ? record[field.title] : null;
            } else {
                item[field.columnName] = it[field.columnName];
            }
        }
        items.push(item);
    }

    useEffect(() => {
        if (globalSearchInput.current && !loading) globalSearchInput.current.value = urlParams.globalSearch;
    }, [loading, paginator]);

    const toggleableColumns = fields.flatMap((f) => {
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

    const columns = fields.filter((f) => !f.toggleable || selectedColumns.find((el) => el.field === f.columnName));

    let tableEvent: DataTablePFSEvent | any = undefined;
    const onTableEvent = (e: DataTableSortParams) => {
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
    fields.forEach((field) => {
        if (field.searchable && !field.isGloballySearchable)
            filters[field.columnName] = {
                value: urlFilters[field.columnName],
                matchMode: FilterMatchMode.CONTAINS
            };
    });

    const onFilter = debounce((ev: DataTablePFSEvent) => {
        filters = ev.filters;
        fetchTable();
    }, 300);

    const fetchTable = () => {
        let data = {} as any;

        data.page = tableEvent === undefined || tableEvent.page === undefined ? paginator?.currentPage ?? 1 : tableEvent.page + 1;

        data.perPage = tableEvent?.rows ?? paginator?.perPage ?? 10;

        if (tableEvent?.multiSortMeta) {
            data.sort = JSON.stringify(tableEvent.multiSortMeta);
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

        Inertia.get(`/${configs.prefix}/${resource?.pluralLabel.toLowerCase()}`, data, {
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

    let exportableFields = fields.filter((f) => f.exportable);
    const exportCSV = (event: any) => {
        dtRef.current?.exportCSV(event);
    };

    const toolbarLeftContents = <React.Fragment></React.Fragment>;

    const toolbarRightContents = (
        <React.Fragment>
            <Button
                className="p-button-success mr-2"
                icon="pi pi-plus"
                label="New"
                onClick={() => trinityLink(`/${configs.prefix}/${resource?.name}/create`)}
            />
            <Button
                className="p-button-danger"
                icon="pi pi-trash"
                label="Delete"
            />
        </React.Fragment>
    );

    const header = (
        <div className="flex justify-content-between flex-column sm:flex-row">
            <div className="flex mb-3">
                {!!exportableFields.length && (
                    <Button
                        icon="pi pi-external-link"
                        className="p-button-primary mb-2 mr-2"
                        label="Export"
                        onClick={exportCSV}
                    />
                )}
                {showClearFilters && (
                    <Button
                        type="button"
                        icon="pi pi-filter-slash"
                        label="Clear"
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
                            placeholder="Keyword Search"
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

    return (
        <>
            <Toolbar
                left={toolbarLeftContents}
                right={toolbarRightContents}
            />

            <DataTable
                ref={dtRef}
                selection={selectedItems}
                onSelectionChange={(e) => setSelectedItems(e.value)}
                header={header}
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
                value={items}
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                filterDisplay="row"
                globalFilter={'contains'}
                removableSort
                responsiveLayout="scroll"
                sortMode="multiple"
                onPage={onTableEvent}
                onFilter={onFilter}
                filters={filters}
                onSort={onTableEvent}
            >
                <Column
                    exportable={false}
                    selectionMode="multiple"
                    style={{ width: '3rem' }}
                    filter={false}
                />
                {columns.map((field) => {
                    const body = (data: any) => (loading ? <Skeleton /> : <div>{data[field.columnName]}</div>);
                    return (
                        <Column
                            key={field.columnName}
                            body={body}
                            field={field.columnName}
                            header={field.label}
                            sortable={field.sortable}
                            showFilterMenu={false}
                            showFilterMatchModes={false}
                            showFilterOperator={false}
                            showClearButton
                            filterMatchMode={'contains'}
                            excludeGlobalFilter={!field.isGloballySearchable}
                            filter={field.searchable && !field.isGloballySearchable}
                            filterPlaceholder={field.searchPlaceholder ?? `Search by ${field.label}`}
                            exportable={field.exportable}
                        />
                    );
                })}
            </DataTable>
        </>
    );
};

export default Table;
