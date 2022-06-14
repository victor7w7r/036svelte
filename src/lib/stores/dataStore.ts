import { writable } from 'svelte/store';
import type { TData } from '$lib/types';

const useData = () => {
    const { subscribe, update } = writable<TData>({
        data: "", 
        loading: false,   
        success: false
    });

    return {
        subscribe,
        request: () => update(data => ({ ...data, loading: true })),
        fail: () => update(data => ({ ...data, loading: false })),
        success: ( payload: string ) => update(data => ({ ...data, data: payload }))
    };
};

export const data = useData();