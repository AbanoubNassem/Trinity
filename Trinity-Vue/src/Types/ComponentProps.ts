import type Field from "@/Types/Field";
import type BaseLayout from "@/Types/BaseLayout";

export default interface ComponentProps {
  component: BaseLayout | Field;
  extraClasses?: string;
  formData?: object;
}
