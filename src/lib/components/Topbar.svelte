<script lang="ts">
	import { title } from '../stores/title';
	import Search from './Search.svelte';

	let titleValue: string;

	title.subscribe((value) => {
		titleValue = value;
	});
</script>

<div class="container">
	<div class="header">
		<span>{titleValue}</span>
		<i class="far fa-sun" />
	</div>
	<Search />
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
		margin: 0 20px;
	}
</style>
