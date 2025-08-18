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


export const getPaginatedPosts = async (page: number = 1): Promise<any[]> => {
    try {
        const response = await apiGet(ENDPOINTS.posts, {
            params: { _page: page },
        });
        return response?.data || response;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};