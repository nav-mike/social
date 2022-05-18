<script lang="ts">
	export let state: 'hidden' | 'visible' = 'hidden';
</script>

<div class={state}>
	<slot />
</div>

<style>
	.hidden {
		display: none;
	}

	.visible {
		position: absolute;
		background-color: black;
		box-shadow: rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px;

		display: flex;
		flex-direction: column;
		border-radius: 5px;
	}
</style>
