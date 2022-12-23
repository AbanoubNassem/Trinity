import type BaseField from "@/Types/Models/BaseField";

export default interface TextAreaField extends BaseField {
  autoResize: boolean;

  rows: number;

  cols: number;
}
