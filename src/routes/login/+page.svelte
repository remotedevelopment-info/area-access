<script lang="ts">
	import Login from '../../components/auth/login.svelte';

	function handleSubmit(event) {
		console.log(event.detail);
	}
</script>


<Login area={''} on:login={handleSubmit} />
