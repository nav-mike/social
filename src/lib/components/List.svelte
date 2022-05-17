<script lang="ts">
	export let items: any[] = [];
	export let title: string;
	export let component: any;
</script>

<div class="container">
	<h3>{title}</h3>
	<div class="items">
		{#each items as item}
			<svelte:component this={component} {...item} />
		{:else}
			<p>Loading...</p>
		{/each}
	</div>
	<a href="/" class="show-more">Show more</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;

		background-color: rgb(47, 51, 54);
		border-radius: 20px;
	}

	.items {
		display: flex;
		flex-direction: column;
	}

	h3 {
		padding: 0 20px;
	}

	.show-more {
		color: rgb(29, 155, 240);
		text-decoration: none;
		padding: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.show-more:hover {
		background-color: rgb(59, 64, 68);
	}
</style>
