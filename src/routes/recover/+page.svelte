<script lang="ts">
    import Reset from "../../components/auth/reset.svelte";

    function handleSubmit(event) {
		console.log(event.detail);
		//data to sent to API
		// {
		// 	email: event.detail.email
		// }
	}
</script>

<Reset area="" on:reset={handleSubmit} />