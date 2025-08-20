import { useInfiniteQuery, useQuery } from 'react-query';
import { getPaginatedPosts, getPosts } from '../Apis/services/UserService';

export const usePostsQuery = () => {
    const {
        data: posts,
        isLoading: loadingPosts,
        isFetching: fetchingPosts,
    } = useQuery('Posts', getPosts, { select: data => data, staleTime: 0 });

    const {
        data: paginatedData,
        isLoading: LoadingPages,
        isFetching: FetchingPages,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery(['PaginatedPosts'], getPaginatedPosts, {
        keepPreviousData: true,
        enabled: true,
        getNextPageParam: lastPage => lastPage?.nextPage,
        refetchOnWindowFocus: false,
        initialData: {
            pageParams: [],
            pages: [],
        },
    });

    const paginated_data = paginatedData?.pages?.flatMap(page => page?.data);

    const fetchNextPages = async () => {
        if (!FetchingPages && !LoadingPages && hasNextPage) {
            await fetchNextPage();
        }
    };

    return {
        posts,
        paginated_data,
        fetchNextPages,
        loadingPosts,
        fetchingPosts,
    };
};
