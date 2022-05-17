<script lang="ts">
	import type { TwitterUserInterface } from '../models/TwitterUserInterface';
	import List from './List.svelte';
	import UserCard from './UserCard.svelte';

	export let users: TwitterUserInterface[] = [];
</script>

<List
	items={users.map((user) => ({
		name: `${user.name.first} ${user.name.last}`,
		username: user.login.username,
		avatarUrl: user.picture.thumbnail,
		id: user.login.uuid
	}))}
	title="Who to follow"
	component={UserCard}
/>
