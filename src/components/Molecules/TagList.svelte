<script lang='ts'>
  import { page } from '$app/stores';
  import { defaultTo } from 'lodash-es';

  export let active = '';
  // initialize active
  page.subscribe(({ params }) => active = defaultTo(params.tag, ''));

  export let tags = [];
  export let blog = '';
  const href = name => ['tags', blog, name].join('/');
  const inactive = name => active !== '' && active !== name ? ' inactive' : '';
  const activate = name => active = name;
</script>
<ul class='field is-grouped is-grouped-multiline'>
  {#each tags as name}
    <li class='control'>
      <a href='/{href(name)}'
         on:click={() => activate(name)}
         class='tag ossc {name}{inactive(name)}'>
        {name}
      </a>
    </li>
  {/each}
</ul>