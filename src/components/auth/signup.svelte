<script lang="ts">
	import './auth.css';
	export let area
</script>

<div class="page">
	<form autocomplete="off" class="form">
		<div class="control">
			{#if area === undefined}
				<h1>Welcome</h1>
			{:else}
				<h1>Welcome to {area}</h1>
			{/if}
		</div>
		<div class="control">
			<p>Please enter your email to signup</p>
		</div>
		<div class="control block-cube block-input">
			<input name="email" placeholder="Email address" type="email" required />
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
			<div class="text">Register</div>
		</button>
	</form>
</div>
