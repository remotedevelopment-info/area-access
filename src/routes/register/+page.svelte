<script>
	import Signup from '../../components/auth/signup.svelte';

	function handleSubmit(event) {
		console.log(event.detail);
	}
</script>

<Signup area="" on:submit={handleSubmit} />
