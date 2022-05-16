<script lang="ts">
	import { onMount } from 'svelte';
	import type { TwitterUserInterface } from '../models/TwitterUserInterface';
	import UserCard from './UserCard.svelte';

	let users: TwitterUserInterface[] = [];

	onMount(async () => {
		for (let i = 0; i < 3; i++) {
			const response = await fetch('https://randomuser.me/api/');
			const data = await response.json();
			users = [...users, data.results[0]];
		}
	});
</script>

<div class="container">
	<h3>Who to follow</h3>
	<div class="users">
		{#each users as user}
			<UserCard
				name={`${user.name.first} ${user.name.last}`}
				username={user.login.username}
				avatarUrl={user.picture.thumbnail}
				id={user.login.uuid}
			/>
		{:else}
			<p>loading...</p>
		{/each}
	</div>
	<a href="/" class="show-more">Show more</a>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;

		background-color: rgb(47, 51, 54);
		border-radius: 20px;
	}
	.users {
		flex: 1;
	}
	h3 {
		padding: 0 20px;
	}
	.show-more {
		color: rgb(29, 155, 240);
		text-decoration: none;
		padding: 10px 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.show-more:hover {
		background-color: rgb(59, 64, 68);
	}
</style>
