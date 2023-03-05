<script>
    import Menu from '$lib/menu.svelte'
</script>
<div class="outer">
    <Menu />
    <div class="inner">
        <slot />
    </div>
</div>

<style>
    .outer {
        background: rebeccapurple;
        padding-top: 1.5rem;
    }
    .inner {
        background: rebeccapurple;
        padding: 1rem 2rem;
    }
</style>
