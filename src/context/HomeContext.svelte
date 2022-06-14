<script lang="ts" context="module">

import { theme } from '@/stores';
import { get } from 'svelte/store';

export const blueChange = (): void => { 

    if(get(theme).darkMode) {
        theme.setDarkBackground("dark:bg-sky-900");
        theme.setControlBackground('bg-sky-700/30');
        theme.setTogglePeer('peer-checked:bg-sky-500');
    } else {
        theme.setWhiteBackground("bg-sky-300");
        theme.setControlBackground('bg-sky-700/30');
        theme.setTogglePeer('peer-checked:bg-sky-300');
    }
};

export const purpleChange = (): void => {
    
    if(get(theme).darkMode) {
        theme.setDarkBackground("dark:bg-purple-900");
        theme.setControlBackground('bg-purple-700/30');
        theme.setTogglePeer('peer-checked:bg-purple-500');
    } else {
        theme.setWhiteBackground("bg-purple-300");
        theme.setControlBackground('bg-purple-700/30');
        theme.setTogglePeer('peer-checked:bg-purple-300');
    }

};

export const redChange = (): void => {

    if(get(theme).darkMode) {
        theme.setDarkBackground("dark:bg-red-900");
        theme.setControlBackground('bg-red-700/30');
        theme.setTogglePeer('peer-checked:bg-red-500');
    } else {
        theme.setWhiteBackground("bg-red-300");
        theme.setControlBackground('bg-red-700/30');
        theme.setTogglePeer('peer-checked:bg-red-300');
    }
};

export const emeraldChange = (): void => {

    if(get(theme).darkMode) {
        theme.setDarkBackground("dark:bg-emerald-900");
        theme.setControlBackground('bg-emerald-700/30');
        theme.setTogglePeer('peer-checked:bg-emerald-300');
    } else {
        theme.setWhiteBackground("bg-emerald-300");
        theme.setControlBackground('bg-emerald-700/30');
        theme.setTogglePeer('peer-checked:bg-emerald-500');
    }
};
</script>