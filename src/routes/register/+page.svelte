<script lang="ts">
	import Signup from '../../components/auth/signup.svelte';

	function handleSubmit(event: any) {
		console.log(event.detail);
	}
</script>

<Signup area="" on:submit={handleSubmit} />
