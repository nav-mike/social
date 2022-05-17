<script lang="ts">
	export let promotes: {
		title: string;
		domain: string;
		tweetsCount?: number;
		promotedBy?: string;
	}[] = [];
</script>

<div>
	<h3>Trends for you ({promotes.length})</h3>
</div>
