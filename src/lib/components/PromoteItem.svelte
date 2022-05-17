<script lang="ts">
	import ListItem from './ListItem.svelte';

	export let title: string;
	export let domain: string;
	export let tweetsCount: string | undefined;

	const handleClick = () => {
		console.log('Clicked');
	};
</script>

<ListItem link="/">
	<div class="trend">
		<span class="domain">{domain}</span>
		<span class="title">{title}</span>
		{#if tweetsCount}
			<span class="tweets-count">{tweetsCount} Tweets</span>
		{/if}
	</div>
	<button on:click={handleClick}><i class="fa-solid fa-ellipsis" /></button>
</ListItem>

<style>
	.trend {
		display: flex;
		flex-direction: column;
		flex: 1;
		color: grey;
	}

	.domain {
		font-size: 13px;
	}

	.title {
		color: white;
		font-size: 16px;
	}

	.tweets-count {
		font-size: 12px;
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
