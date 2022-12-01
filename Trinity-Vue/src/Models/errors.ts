export default interface Errors {
  value: { [key: string]: string[] };
  formatters: any[];
  contentTypes: any[];
  declaredType?: any;
  statusCode: number;
}
