<script lang="ts">
import { theme } from '@/stores';
const toggled = (): void => {

    if($theme.darkMode) {
        theme.setDarkMode(false);
        theme.setDarkBackground('bg-white');
        theme.setControlBackground('bg-slate-700/30');
        theme.setTogglePeer('peer-checked:bg-white');
        document.body.classList.toggle("dark");
    } else {
        theme.setDarkMode(true);
        theme.setWhiteBackground('dark:bg-zinc-900');
        theme.setControlBackground('bg-slate-700/30');
        theme.setTogglePeer('peer-checked:bg-dark');
        document.body.classList.toggle("dark");
    }
};

const toggleDesign: string = `${$theme.togglePeer} w-11 
    h-6 bg-gray-200 rounded-full peer transition-colors duration-1000 
    peer-focus:ring-0 peer-focus:ring-blue-300 
    dark:peer-focus:ring-blue-800 dark:bg-gray-700 
    peer-checked:after:translate-x-full 
    peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-0.5 after:left-[2px] 
    after:bg-white after:border-gray-300 after:border 
    after:rounded-full after:h-5 after:w-5 after:transition-all 
    dark:border-gray-600`;
</script>

<div class="relative">
    <div class="flex items-center justify-center w-full">
        <label for="checked-toggle" class="inline-flex items-center mb-4 cursor-pointer">
            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" 
                checked={$theme.darkMode} on:change={toggled} />
            <div class={toggleDesign}></div>
            <span class="ml-3 text-sm font-medium adaptable-text select-none">Dark Mode</span>
        </label>
    </div>
</div>