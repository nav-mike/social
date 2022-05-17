<script lang="ts">
	export let link: string;
</script>

<a href={link}>
	<slot />
</a>

<style>
	a {
		display: flex;
		flex: 1;
		text-decoration: none;
		color: white;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
	}

	a:hover {
		background-color: rgb(59, 64, 68);
	}
</style>
