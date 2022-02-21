<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  import clickedOutside from '$lib/Application/actions/clickOutside';

  let active = false;
  const activeManager = (fn) => () => activeDispatcher('active', fn());
  const toggle = activeManager(() => active = !active);
  const handleClickedOutside = activeManager(() => active = false);
  const activeDispatcher = createEventDispatcher();
</script>
<a aria-expanded='false'
   class='navbar-burger'
   class:is-active={active}
   data-target='navbarBasicExample'
   on:click={toggle}
   on:clickedOutside={handleClickedOutside}
   role='button' use:clickedOutside>
  {#each [1, 2, 3] as _} <span aria-hidden='true'></span> {/each}
</a>