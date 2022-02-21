<script lang="ts">
  import type { NavbarItem } from "$atoms/types";
  import Item from "$atoms/NavbarItem.svelte";

  export let itemList: NavbarItem[]
</script>
{#each itemList as { text, link }}
  <Item {text} {link} />
  {/each}