<script lang="ts">
	import { page } from '$app/stores';
	import Reset from '../../../components/auth/reset.svelte';

	let area = $page.params.area;

	function handleSubmit(event) {
		console.log(event.detail);
	}
</script>

<Reset {area} on:reset={handleSubmit} />
