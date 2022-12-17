import type BaseComponent from "@/Models/BaseComponent";

export default interface Field extends BaseComponent {
  columnName: string;
  initialValue: string;
  title: string;
  relationshipName?: string;
  sortable: boolean;
  searchable: boolean;
  isGloballySearchable: boolean;
  exportable: boolean;
}
