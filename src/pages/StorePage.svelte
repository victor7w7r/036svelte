<script lang="ts">
import { data } from '@/stores/dataStore';

let dataValue: string = '';
</script>

<h3 class="text-center mt-3">Store Example</h3>
<p class="text-center mt-3">Write anything in this form and send!</p>
<form on:submit|preventDefault = {() => data.success(dataValue)}>
    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <input type="text" class="form-control mb-4" required bind:value="{dataValue}" placeholder="here" />
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary text-center">Submit</button>
                </div>
                {#if ($data.data !=="")}
                    <p class="text-center mt-3">Store State: Yes, you write <b>{ $data.data }</b></p>
                {:else}
                    <p class="text-center mt-3">Store State: Not yet.</p>
                {/if}
            </div>
            <div class="col-sm"></div>
        </div>
    </div>
</form>