<script lang="ts">
import { Router, Route } from 'yrv';
</script>

<Router>
    <Route exact path="/" component="{import('@/pages/HomePage.svelte')}" />
    <Route path="/store" component="{import('@/pages/StorePage.svelte')}" />
</Router>