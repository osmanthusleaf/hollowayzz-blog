<script lang='ts'>
  import TagList from '$molecules/TagList.svelte';
  import { base } from '$app/paths';

  export let title;
  export let posts;
  export let tags;
  export let blog;
</script>

<div>
  <h1>{title}</h1>
  <TagList {blog} {tags} />
  {#each posts as { slug, metadata: { title, excerpt } }}
    <a href={`${base}/post/${blog}/${slug}`}>
      <h2 class='title'>{title}</h2>
      <p>{excerpt}</p>
    </a>
  {/each}
</div>

<style lang='scss'>
</style>
