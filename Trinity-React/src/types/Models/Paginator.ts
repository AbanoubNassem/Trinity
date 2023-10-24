export default interface IPaginator<T> {
    currentPage: number;
    data: Array<T>;
    totalCount: number;
    perPage: number;
    totalPages: number;
}
