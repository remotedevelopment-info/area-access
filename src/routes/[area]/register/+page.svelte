
<script lang="ts">
  import { page } from '$app/stores';
  import Signup from '$lib/components/auth/signup.svelte';

  let area = $page.params.area
</script>

<Signup area={area}/>
