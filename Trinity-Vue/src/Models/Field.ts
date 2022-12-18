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
  placeholder?: string;
  toolTip?: string;
  helperText?: string;
  disabled: boolean;
  inputMask?: string;
  slotChar?: string;
  prefixes?: Array<string>;
  suffixes?: Array<string>;
  prefixIcons?: Array<string>;
  suffixIcons?: Array<string>;
}
