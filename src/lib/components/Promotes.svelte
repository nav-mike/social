<script lang="ts">
	import List from './List.svelte';
	import PromoteItem from './PromoteItem.svelte';

	export let promotes: {
		title: string;
		domain: string;
		tweetsCount?: string;
		promotedBy?: string;
	}[] = [];
</script>

<List items={promotes} title="Trends for you" component={PromoteItem} />
