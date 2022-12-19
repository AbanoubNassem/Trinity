import type Field from "@/Types/Field";

export default interface TextAreaField extends Field {
  autoResize: boolean;

  rows: number;

  cols: number;
}
