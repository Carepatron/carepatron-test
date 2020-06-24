using System;
namespace api.Contracts.Response
{
    public class Pagination
    {
        public Pagination(int limit, int offset)
        {
            Limit = limit;
            Offset = offset;
        }

        public int Limit { get; }
        public int Offset { get; }
    }
}
