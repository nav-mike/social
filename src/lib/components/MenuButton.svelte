<script lang="ts">
	let state = 'hidden';

	const handleClick = () => {
		state = 'visible';
	};
</script>

<button on:click|preventDefault={handleClick}>
	<slot name="icon" />
</button>
<div class={state}>
	<slot name="menu" />
</div>

<style>
	.hidden {
		display: none;
	}

	.visible {
		display: block;
	}

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
