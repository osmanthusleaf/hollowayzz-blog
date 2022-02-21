<script context='module' lang='ts'>
  import utils from '$lib/fetchUtilities.ts';

  export const load = async ({ fetch, params: { blog, tag } }) => {
    const [posts, tags] = await utils(fetch).blogPageLoader([`tags/${blog}/${tag}`, `tags/${blog}`]);
    return { props: { posts, tags, blog } };
  };
</script>

<script>
  import Blog from '$organisms/Blog.svelte';
  import { capitalize } from 'lodash-es';

  export let posts;
  export let tags;
  export let blog;
  const title = `Em's ${capitalize(blog)} Blog`;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Blog {blog} {posts} {tags} {title} />