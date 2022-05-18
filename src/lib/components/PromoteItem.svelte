<script lang="ts">
	import FloatMenuItem from './FloatMenuItem.svelte';
	import ListItem from './ListItem.svelte';
	import MenuButton from './MenuButton.svelte';

	export let title: string;
	export let domain: string;
	export let tweetsCount: string | undefined;
</script>

<ListItem link="/1">
	<div class="trend">
		<span class="domain">{domain}</span>
		<span class="title">{title}</span>
		{#if tweetsCount}
			<span class="tweets-count">{tweetsCount} Tweets</span>
		{/if}
	</div>
	<MenuButton>
		<i class="fa-solid fa-ellipsis" slot="icon" />
		<svelte:fragment slot="menu">
			<FloatMenuItem icon="far fa-frown">Not interested in this</FloatMenuItem>
			<FloatMenuItem icon="far fa-frown">This trend is harmful or spammy</FloatMenuItem>
		</svelte:fragment>
	</MenuButton>
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
</style>
