<script context='module'>
  import { base } from '$app/paths';
  import utils from '$lib/fetchUtilities';

  export const prerender = true;
  export const load = async ({ fetch, params: { slug, blog } }) =>
    (post => ({ props: { post } }))
    (await utils(fetch).json(fetch, `${base}/post/${blog}/${slug}`));
</script>

<script>
  export let post;
  let date = post.metadata.date.toUpperCase();
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

<div class='columns is-mobile is-multiline is-centered'>
  <h1 class='title column is-three-quarters'>{post.metadata.title}</h1>
  <!--<p class='info'><a href='https://github.com/staccato-em'>staccato-em</a> {date}</p>-->
  <p class='info column is-three-quarters'>{date}</p>
  <section class='column is-three-quarters'>
    {@html post.content}
  </section>
</div>

<style lang='scss'>
  h1.title {
    margin-bottom: 0;
  }
</style>