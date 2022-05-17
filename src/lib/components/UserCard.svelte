<script lang="ts">
	import FollowButton from './FollowButton.svelte';
	import ListItem from './ListItem.svelte';

	export let avatarUrl: string;
	export let name: string;
	export let username: string;
	export let id: string;
</script>

<ListItem link={`/${username}`}>
	<img src={avatarUrl} alt={name} />
	<div class="user-data">
		<span class="name">{name}</span>
		<span class="username">@{username}</span>
	</div>
	<FollowButton url={`follow/${id}`} />
</ListItem>

<style>
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
