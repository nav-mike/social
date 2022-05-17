<script lang="ts">
	import FollowButton from './FollowButton.svelte';

	export let avatarUrl: string;
	export let name: string;
	export let username: string;
	export let id: string;
</script>

<a href="/{username}" class="container">
	<img src={avatarUrl} alt={name} />
	<div class="user-data">
		<span class="name">{name}</span>
		<span class="username">@{username}</span>
	</div>
	<FollowButton url={`follow/${id}`} />
</a>

<style>
	.container {
		display: flex;
		flex: 1;
		text-decoration: none;
		color: white;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
	}

	.container:hover {
		background-color: rgb(59, 64, 68);
	}

	img {
		border-radius: 50%;
		margin-right: 10px;
	}

	.user-data {
		flex: 1;
		margin-right: 20px;
	}

	.username {
		color: grey;
	}

	.name:hover {
		text-decoration: underline;
	}
</style>
