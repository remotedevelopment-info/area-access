<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import './auth.css';
	export let area: any

	let isSuccessVisible = false;
	let submitted = false;
	let email  = ''

	function handleSubmit() {
		isSuccessVisible = true;
		dispatch('reset', {
			email: email
		});
		setTimeout(function(){
			isSuccessVisible = false;
		}, 4000);
	}
</script>

<div class="page">
	<form autocomplete="off" class="form"  id="reset-form" class:submitted on:submit|preventDefault={handleSubmit}>
		<div class="control">
			{#if area === undefined}
				<h1>Cant Access?</h1>
			{:else}
				<h1>Cant Access <b>{area}</b> ?</h1>
			{/if}
		</div>
		<div class="control">
			<p>Please enter your email to recover</p>
		</div>
		<div class="control block-cube block-input">
			<input name="email" placeholder="Email address" type="email" required  bind:value={email}/>
			<div class="bg-top">
				<div class="bg-inner" />
			</div>
			<div class="bg-right">
				<div class="bg-inner" />
			</div>
			<div class="bg">
				<div class="bg-inner" />
			</div>
		</div>
		<button class="btn block-cube block-cube-hover" type="submit">
			<div class="bg-top">
				<div class="bg-inner" />
			</div>
			<div class="bg-right">
				<div class="bg-inner" />
			</div>
			<div class="bg">
				<div class="bg-inner" />
			</div>
			<div class="text">Send Link</div>
		</button>
	</form>
</div>
