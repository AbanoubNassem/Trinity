import type Errors from "@/Types/Models/errors";
import type BaseComponent from "@/Types/Models/BaseComponent";
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";

export default interface LayoutProps<T extends BaseComponent> {
  component: T;

  form: InertiaFormProps<any>;
  errors: Errors;
  setFieldValue: (attr: string, value: any) => void;
}
