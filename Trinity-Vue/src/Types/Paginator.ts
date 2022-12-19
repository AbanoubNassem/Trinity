export default interface IPaginator {
  currentPage: number;
  data: Array<any>;
  totalCount: number;
  perPage: number;
  totalPages: number;
}
