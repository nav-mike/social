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
	}

	.header {
	}
</style>
