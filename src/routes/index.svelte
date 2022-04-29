<script lang="ts">
import { onMount, onDestroy } from 'svelte';

import { useBinanceAndState } from '../hooks/useBinanceAndState';
import { data } from '../stores/dataStore';

const { isLoading, bin, getCurrencies, unsubscribe } = useBinanceAndState();

onMount(() => getCurrencies());
onDestroy(() => unsubscribe());
</script>

<h3 class="text-center mt-3">Happy Hacking! with Typescript?</h3>
<p class="text-center mt-3 roboto">SCSS is working? Yes, with Roboto</p>
{#if ($data.data !=="")}
    <p class="text-center mt-3">Store State: Yes, you write <b>{ $data.data }</b></p>
{:else}
    <p class="text-center mt-3">Store State: Not yet.</p>
{/if}

<div class="row mt-4">
    <div class="col-sm"></div>
    <div class="col-sm">
        <h4 class="text-center mt-3">Made with love by</h4>
        <div class="d-flex justify-content-center">
            <img src="/src/assets/brand.png" alt=""/>
        </div>
    </div>
    <div class="col-sm"></div>
</div>
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-3">
            <h3 class="text-center mt-3">Lets see bitcoin price</h3>
            <br />
            {#if $isLoading}
                <p class='text-center' >Loading...</p>  
            {:else}
                <p class='text-center'>Symbol: { $bin.symbol } </p>
                <p class='text-center'>Price: { $bin.askPrice } </p>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"; 
    .roboto {
        font-family: 'Roboto', sans-serif;
    }
</style>