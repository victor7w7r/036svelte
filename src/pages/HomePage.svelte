<script lang="ts">
import { onDestroy, onMount } from 'svelte';

import { data, theme } from '@/stores';
import Spinner from "@/components/Spinner.svelte";

import { useHome, blueChange, purpleChange, 
        redChange, emeraldChange, unsubscribe, changeToStore } from '@/context/Home';

import brand from '../assets/brand.png';
import brandwhite from '../assets/brandwhite.png';
import tailwind from '../assets/tailwind.png';
import tailwindWhite from '../assets/tailwindwhite.png';

const { isLoading, bin, getCurrencies } = useHome();

onMount(() => getCurrencies());
onDestroy(() => unsubscribe());
</script>

<div class="absolute h-screen inset-0 backdrop-blur-xl">
    <div class='flex flex-col lg:flex-row items-center mt-24 tall:mt-32 lg:items-stretch lg:justify-evenly lg:h-3/6'>
        <div class={`card-container ${$theme.controlBackground}`}>
            <p class="adaptable-center-text text-lg tall:text-xl lg:text-3xl font-amina">Made with love by</p>
            <img src={$theme.darkMode ? brandwhite : brand} alt="" class="scale-75 lg:scale-100" />
            <h3 class="adaptable-center-text text-base lg:text-xl font-semibold mb-4">Happy Hacking! with Typescript?</h3>
            <p class="adaptable-center-text text-base lg:text-xl font-roboto mb-8">Roboto Font works with</p>
            <img src={$theme.darkMode ? tailwindWhite : tailwind} alt="" class="scale-50 tall:scale-75 lg:scale-75" />
        </div>
        <div class={`card-container ${$theme.controlBackground}`}>
            {#if ($data.data !=="")}
                <p class="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Yes, you write <b>{ $data.data }</b></p>
            {:else}
                <p class="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Not yet.</p>
            {/if}
            <div class='lg:w-[28rem] w-[32rem]'></div>
            <h3 class="adaptable-center-text text-lg lg:text-3xl font-semibold my-4">Lets see bitcoin price</h3>
            {#if $isLoading}
                <Spinner appendClass='data' />
            {:else}
                <p class='adaptable-center-text text-base lg:text-lg font-semibold'>Symbol: { $bin.symbol } </p>
                <p class='adaptable-center-text text-base lg:text-lg font-semibold'>Price: { $bin.askPrice } </p>
            {/if}
        </div>
    </div>
    <div class='flex items-center justify-center my-8 tall:my-12'>
        <button class="standard-button" on:click={changeToStore}>Go to store</button>
    </div>
    <div class='flex flex-row items-center justify-center'>
        <button class="blue-button" on:click={blueChange}></button>
        <button class="purple-button" on:click={purpleChange}></button>
        <button class="red-button" on:click={redChange}></button>
        <button class="emerald-button" on:click={emeraldChange}></button>
    </div>
</div>