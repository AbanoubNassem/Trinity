import type BaseField from "@/Types/Models/BaseField";

export default interface SelectField extends BaseField {
  options?: { [key: string]: string };
  optionLabel: string;
  optionValue: string;
}
