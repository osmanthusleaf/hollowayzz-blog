<script>
    import '../global.scss';
    import MainNavbar from "$organisms/MainNavbar.svelte";
</script>
<MainNavbar />
<section class="container is-fluid">
    <slot></slot>
</section>
<svelte:head>
    <link href='/favicon.png' rel="icon" />
</svelte:head>