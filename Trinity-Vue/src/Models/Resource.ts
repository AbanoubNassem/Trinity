import type BaseComponent from "@/Models/BaseComponent";

export interface Resource {
  name: string;
  label: string;
  pluralLabel: string;
  icon: string;
  showGridlines: boolean;
  stripedRows: boolean;
  schema: Array<BaseComponent>;
}
