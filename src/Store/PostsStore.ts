import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type IPost = {
    id: number;
    body: string;
    title: string;
    userId: number;
};

interface IDPosts {
    posts: IPost[];
    resetPosts: () => void;
    addPosts: (posts: IPost[]) => void;
}

export const PostsStore = create<IDPosts>()(
    persist(
        immer<IDPosts>((set, get) => ({
            posts: [],
            addPosts: (data: IPost[]) => set(state => { state.posts = data; }),
            resetPosts: () => set(state => { state.posts = []; }),
        })),
        {
            name: 'Posts-Data',
            storage: createJSONStorage(() => AsyncStorage)
        }
    ),
);
