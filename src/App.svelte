<script lang="ts">
import { onMount } from 'svelte';

import { theme } from '@/stores';

import '@/index.scss';

import Header from '@/components/Header.svelte';
import Router from '@/Router.svelte';

onMount(() => {
    const isDark: boolean = document.body.classList.contains("dark");
    isDark ? theme.setDarkMode(true) : theme.setDarkMode(false); 
});
</script>

<div class={`h-screen transition-colors duration-1000 ${$theme.whiteBackground} ${$theme.darkBackground}`}>
    <Router />
    <Header />
</div>

