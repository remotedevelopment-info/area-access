<script lang="ts">
	import { page } from '$app/stores';
	import Reset from '../../../components/auth/reset.svelte';

	let area = $page.params.area;

	function handleSubmit(event) {
		console.log(event.detail);
		//data to sent to API
		// {
		// 	email: event.detail.email
		// 	area: area
		// }
	}
</script>

<Reset {area} on:reset={handleSubmit} />
