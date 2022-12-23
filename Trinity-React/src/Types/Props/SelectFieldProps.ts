import type FieldProps from "@/Types/Props/FieldProps";
import type SelectField from "@/Types/Models/SelectField";

export default interface SelectFieldProps extends FieldProps<SelectField> {
  search?: (value: string) => Promise<Array<{ [key: string]: string }>>;
  loading?: boolean;
  disabled?: boolean;
}
