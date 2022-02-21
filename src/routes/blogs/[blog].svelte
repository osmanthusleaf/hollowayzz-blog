<script context="module" lang="ts">
    import utils from "$lib/fetchUtilities.ts";

    export const load = async ({ fetch, params: { blog } }) => {
        const [posts, tags] = await utils(fetch).blogPageLoader([`post/${blog}`, `tags/${blog}`]);
        return { props: { posts, tags, blog } };
    };
</script>

<script>
    import Blog from "$organisms/Blog.svelte";
    import { capitalize } from "lodash-es";

    export let posts;
    export let tags;
    export let blog;
    $: title = `${capitalize(blog)}`;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Blog {blog} {posts} {tags} {title} />