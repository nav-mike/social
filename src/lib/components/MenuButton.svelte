<script lang="ts">
	import FloatMenu from './FloatMenu.svelte';

	let state: 'hidden' | 'visible' = 'hidden';

	const handleClick = () => {
		state = 'visible';
	};
</script>

<button on:click|preventDefault={handleClick}>
	<slot name="icon" />
</button>
<FloatMenu {state}>
	<slot name="menu" />
</FloatMenu>

<style>
	button {
		color: grey;
		padding: 10px;
		cursor: pointer;
		margin: 0;
		border: none;
		background-color: transparent;
	}
	button:hover {
		color: rgb(29, 155, 240);
		background-color: rgba(29, 155, 240, 0.1);
		border-radius: 50%;
	}
</style>
