import { writable } from 'svelte/store';
import type { TTheme } from '@/types';

const useTheme = () => {
    const { subscribe, update } = writable<TTheme>({
        darkMode: false,
        whiteBackground: 'bg-white',
        darkBackground: 'dark:bg-zinc-900',
        controlBackground: 'bg-slate-700/30',
        togglePeer: ''
    });

    return {
        subscribe,
        setDarkMode: ( darkMode: boolean ) => update(theme => ({ ...theme, darkMode })),
        setWhiteBackground: ( whiteBackground: string ) => update(theme => ({ ...theme, whiteBackground })),
        setDarkBackground: ( darkBackground: string ) => update(theme => ({ ...theme, darkBackground })),
        setControlBackground: ( controlBackground: string ) => update(theme => ({ ...theme, controlBackground })),
        setTogglePeer: ( togglePeer: string ) => update(theme => ({ ...theme, togglePeer }))
    };
};

export const theme = useTheme();