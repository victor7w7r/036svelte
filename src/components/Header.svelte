<script lang="ts">
import { Link } from 'yrv';
import { theme } from '@/stores';

import DarkModeToggler from './DarkModeToggler.svelte';
import logo from '@/assets/svelte.png';
</script>

<div class="flex items-center justify-center">
    <nav class={`navbar ${$theme.controlBackground}`}>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="flex-1 flex items-stretch justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <img src={logo} class="block h-8 w-auto mr-5" alt="" />
                        <Link href="/" class="font-medium adaptable-text">Svelte + TS Template</Link>
                    </div>
                </div>
                <div class="items-center mt-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <DarkModeToggler />
                </div>
            </div>
        </div>
    </nav>
</div>