import type Field from "@/Types/Field";

export default interface MaskField extends Field {
  autoClear: boolean;
  inputMask?: string;
  slotChar?: string;
}
