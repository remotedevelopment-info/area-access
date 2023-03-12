<script>
	import Signup from '../../components/auth/signup.svelte';

	function handleSubmit(event) {
		console.log(event.detail);
		//data to sent to API
		// {
		// 	email: event.detail.email
		// }
	}
</script>

<Signup area="" on:submit={handleSubmit} />
