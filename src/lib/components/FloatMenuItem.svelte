<script lang="ts">
	export let icon: string;
</script>

<button on:click|preventDefault={() => {}}>
	<i class={icon} />
	<span><slot /></span>
</button>

<style>
	button {
		text-decoration: none;
		color: white;
		padding: 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		background-color: inherit;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	button:hover {
		background-color: rgba(255, 255, 255, 0.03);
	}

	i {
		color: grey;
		padding-right: 10px;
	}

	span {
		flex: 1;
		font-size: 15px;
		text-align: left;
	}
</style>
