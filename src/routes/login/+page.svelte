<script lang="ts">
	import Login from '../../components/auth/login.svelte';

	function handleSubmit(event) {
		console.log(event.detail);
		//data to sent to API
		// {
		// 	email: event.detail.email
		// }
	}
</script>


<Login area={''} on:login={handleSubmit} />
