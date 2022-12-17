import type BaseComponent from "@/Models/BaseComponent";

export default interface Field extends BaseComponent {
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
  exportable: boolean;
}
