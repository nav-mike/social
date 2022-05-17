<script lang="ts">
	import List from './List.svelte';
	import PromoteItem from './PromoteItem.svelte';

	export let promotes: {
		title: string;
		domain: string;
		tweetsCount?: number;
		promotedBy?: string;
	}[] = [];
</script>

<List
	items={promotes.map((item) => ({ title: item.title }))}
	title="Trends for you"
	component={PromoteItem}
/>
