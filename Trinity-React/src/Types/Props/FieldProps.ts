import type Errors from "@/Types/Models/errors";
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type BaseField from "@/Types/Models/BaseField";

export default interface FieldProps<T extends BaseField> {
  component: T;
  form: InertiaFormProps<any>;
  errors: Errors;
  setFieldValue: (attr: string, value: any) => void;
}
