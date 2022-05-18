<script lang="ts">
	import { clickOutside } from '../clickOutside.js';

	export let state: 'hidden' | 'visible' = 'hidden';

	const handleClickOutside = () => {
		state = 'hidden';
	};
</script>

{#if state === 'visible'}
	<div class={state} use:clickOutside on:click_outside={handleClickOutside}>
		<slot />
	</div>
{/if}

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
