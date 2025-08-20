import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from 'react-query';
import { getPaginatedPosts, getPosts } from '../Apis/services/UserService';

export const usePostsQuery = () => {

  const {
    data: posts,
    isLoading: loadingPosts,
    isFetching: fetchingPosts,
  } = useQuery('Posts', getPosts, { select: data => data, staleTime: Infinity, cacheTime: 5 * 60 * 1000 });

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

  const queryClient = new QueryClient();

//   const addPost = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const num = Math.floor(Math.random() * 10);
//         if (num > 2) {
//           resolve(num);
//         } else {
//           reject(new Error('Number is too small'));
//         }
//       }, 2000);
//     });
//   };

//   const {
//     data,
//     mutate: addPostMutation,
//     isLoading: addingPost,
//   } = useMutation(addPost, {
//     onSuccess: async data => {
//       await queryClient.invalidateQueries('Posts');
//     },
//   });

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
    // addPostMutation,
    // addingPost,
  };
};
