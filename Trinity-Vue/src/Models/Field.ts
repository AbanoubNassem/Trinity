export default interface Field {
  componentName: string;

  label: string;

  columnName: string;

  initialValue: string;

  title: string;

  relationshipName?: string;
}
