<script context="module" lang="ts">
    import utils from "$lib/fetchUtilities.ts";

    export const load = async ({ fetch }) => (
        ({ metadata: { title }, content }) => ({ props: { title, content } }))
    (await utils(fetch).pageLoader('index'));
</script>

<script lang="ts">
    export let content;
    export let title;
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head>
{@html content}