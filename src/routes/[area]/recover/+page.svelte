
<script lang="ts">
  import { page } from '$app/stores';
    import Reset from '$lib/components/auth/reset.svelte';

  let area = $page.params.area
</script>

<Reset area={area}/>
