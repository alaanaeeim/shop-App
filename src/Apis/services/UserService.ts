import { ENDPOINTS } from '../endpoints';
import { apiGet } from '../index';

export const getPosts = async (): Promise<any[]> => {
    try {
        const response = await apiGet(ENDPOINTS.posts, {
            params: { name: 'Alaa' },
            headers: { Authorization: 'Alaa' },
        });
        return response?.data || response;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};


export const getPaginatedPosts = async ({ pageParam = 1 }) => {
    try {
        const response = await apiGet(ENDPOINTS.posts, {
            params: { _page: pageParam },
        });
        const data = response?.data || response || [];
        const hasMore = pageParam < 10 || false;
        const nextPage = hasMore ? pageParam + 1 : undefined;

        return { data, nextPage };
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};