<script lang="ts">
	export let url: string;
</script>

<a href={url} class="button">Follow</a>

<style>
	.button {
		background-color: white;
		text-decoration: none;
		color: black;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 40px;
		min-height: 30px;
		max-height: 30px;
		min-width: 80px;
		max-width: 80px;
	}
</style>
