export default interface Field {
  componentName: string;
  label: string;
  columnName: string;
  initialValue: string;
  title: string;
  relationshipName?: string;
  sortable: boolean;
  searchable: boolean;
  isGloballySearchable: boolean;
  toggleable: boolean;
  isToggledHiddenByDefault: boolean;
}
