<script>
	import List from './List.svelte';
	import PromoteItem from './UserCard.svelte';
</script>

<div>
	<List title="Recent" items={[]} component={PromoteItem} />
</div>

<style>
	div {
		position: absolute;
		max-width: 350px;
		min-width: 350px;
		padding: 0;

		top: 40px;
		box-shadow: rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px;
	}
</style>
