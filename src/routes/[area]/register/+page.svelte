
<script lang="ts">
  import { page } from '$app/stores';
	import Signup from '../../../components/auth/signup.svelte';

  let area = $page.params.area

	function handleSubmit(event: any) {
		console.log(event.detail);
	}
</script>

<Signup area={area}  on:submit={handleSubmit} />
