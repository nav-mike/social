<script lang="ts">
	let active: boolean = false;

	const activeSearchHandler = () => {
		active = true;
	};

	const inactiveSearchHandler = () => {
		active = false;
	};
</script>

<div class:active>
	<i class="fab fa-searchengin" class:active />
	<input
		type="text"
		placeholder="Search Twitter"
		on:focus={activeSearchHandler}
		on:focusout={inactiveSearchHandler}
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
		color: rgb(29, 155, 240);
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
