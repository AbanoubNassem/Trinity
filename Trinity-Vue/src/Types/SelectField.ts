import type Field from "@/Types/Field";

export default interface SelectField extends Field {
  options?: Map<string, string>;
}
