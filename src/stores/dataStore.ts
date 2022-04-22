import { writable } from 'svelte/store';
import type { TData } from '../types/TData';

const useData = () => {
    const { subscribe, set, update } = writable<TData>({
        data: "", 
        loading: false,   
        success: false
    });

    return {
        subscribe,
        set,
        request: () => update(data => ({ ...data, loading: true })),
        fail: () => update(data => ({ ...data, loading: false })),
        success: ( payload: string ) => update(data => ({ ...data, data: payload })),
    };
};

export const data = useData();