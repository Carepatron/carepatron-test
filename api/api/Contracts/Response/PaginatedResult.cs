namespace api.Contracts.Response
{
    public class PaginatedResult<T>
    {
        public PaginatedResult(T[] items, Pagination pagination)
        {
            Items = items;
            Pagination = pagination;
        }

        public T[] Items { get; }
        public Pagination Pagination { get; }
    }
}
