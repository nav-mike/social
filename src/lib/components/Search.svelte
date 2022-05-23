<script lang="ts">
	import Recent from './Recent.svelte';

	let active: boolean = false;
	let search: string = '';
	let input: HTMLInputElement;

	const activeSearchHandler = () => {
		active = true;
	};

	const inactiveSearchHandler = () => {
		active = false;
	};

	const clearSearchHandler = () => {
		search = '';
		input.focus();
	};
</script>

<div class:active>
	<i class="fab fa-searchengin" class:active />
	<input
		type="text"
		placeholder="Search Twitter"
		bind:value={search}
		on:focus={activeSearchHandler}
		on:focusout={inactiveSearchHandler}
		bind:this={input}
	/>
	{#if active}
		<Recent />
	{/if}
	<i
		class="far fa-times-circle"
		class:active={active && search.length > 0}
		on:click={clearSearchHandler}
	/>
</div>

<style>
	div {
		background-color: rgb(47, 51, 54);
		border: rgb(47, 51, 54) 1px solid;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		max-width: 310px;
		min-width: 310px;
		padding: 10px;
		border-radius: 40px;
	}

	div.active {
		border: rgb(29, 155, 240) solid 1px;
	}

	i {
		color: grey;
	}

	i.active {
		color: rgb(29, 155, 240) !important;
	}

	i.fa-times-circle {
		color: rgb(47, 51, 54);
	}

	i.fa-times-circle.active {
		cursor: pointer;
	}

	input {
		flex: 1;
		border: none;
		background-color: transparent;
		padding: 10px;
		color: white;
	}

	input:active,
	input:focus {
		border: none;
		outline: none;
	}
</style>
