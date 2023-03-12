<script lang="ts">
	import { page } from '$app/stores';
	import Login from '../../../components/auth/login.svelte';

	let area = $page.params.area;

	function handleSubmit(event) {
		console.log(event.detail);
	}
</script>

<Login {area} on:login={handleSubmit} />
