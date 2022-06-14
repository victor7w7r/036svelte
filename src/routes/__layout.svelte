<svelte:head>
    <title>036sveltekit</title>
</svelte:head>

<script lang=ts>
import { onMount } from 'svelte';
import { theme } from '$lib/stores';

import Header from '../lib/components/Header.svelte';
import '../index.scss';

onMount(() => {
    const isDark: boolean = document.body.classList.contains("dark");
    isDark ? theme.setDarkMode(true) : theme.setDarkMode(false); 
});
</script>

<div class={`h-screen transition-colors duration-1000 ${$theme.whiteBackground} ${$theme.darkBackground}`}>
    <slot />
    <Header/>    
</div>