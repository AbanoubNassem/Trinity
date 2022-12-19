import type BaseComponent from "@/Types/BaseComponent";

export default interface BaseLayout extends BaseComponent {
  columns: number;

  schema: Array<BaseComponent>;
}
