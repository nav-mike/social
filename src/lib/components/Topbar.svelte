<script lang="ts">
	import { title } from '../stores/title';

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
	<div class="search" />
</div>

<style>
	.container {
		position: fixed;
		left: 100px;
		top: 0;
		padding: 20px 20px 20px 0px;
		background-color: black;
		width: calc(100vh - 100px);
		display: flex;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
	}
</style>
