<script lang="ts" context="module">
	import type { TwitterUserInterface } from '../lib/models/TwitterUserInterface';

	export const load = async () => {
		let users: TwitterUserInterface[] = [];
		const promotes = [
			{ title: 'Azovstal', tweetsCount: '183K', domain: 'Politics - Trending' },
			{ title: 'JavaScript', tweetsCount: '37.9K', domain: 'Technology - Trending' },
			{ title: 'Finland and Sweden', tweetsCount: '58.6K', domain: 'Politics - Trending' },
			{ title: '#FortniteChapter3', tweetsCount: '1,774', domain: 'Gaming - Tranding' },
			{ title: 'F-35', tweetsCount: '8,423', domain: 'Politics - Tranding' },
			{ title: '#PlayStation', tweetsCount: '6,864', domain: 'Gaming - Tranding' },
			{ title: 'Pietarissa', domain: 'Tranding in Finland' },
			{ title: 'Turkissa', domain: 'Tranding in Finland' },
			{ title: '#natokeskustelu', domain: 'Tranding in Finland' },
			{ title: 'Musk', tweetsCount: '183K', domain: 'Trending in Finland' }
		];

		for (let i = 0; i < 3; i++) {
			const response = await fetch('https://randomuser.me/api/');
			const data = await response.json();
			users = [...users, data.results[0]];
		}

		return {
			props: { users, promotes }
		};
	};
</script>

<script lang="ts">
	import Footer from '../lib/components/Footer.svelte';
	import WhoFollowList from '../lib/components/WhoFollowList.svelte';
	import Promotes from '../lib/components/Promotes.svelte';

	export let users: TwitterUserInterface[] = [];
	export let promotes: {
		title: string;
		domain: string;
		tweetsCount?: number;
		promotedBy?: string;
	}[] = [];
</script>

<div class="main-container">
	<div class="navbar">
		<i class="fa-brands fa-twitter" />
		<i class="fa-solid fa-house" />
		<i class="fa-solid fa-hashtag" />
		<i class="fa-regular fa-bell" />
		<i class="fa-regular fa-envelope" />
		<i class="fa-regular fa-bookmark" />
		<i class="fas fa-list" />
		<i class="fas fa-user" />
		<i class="fa-regular fa-circle-question" />
		<i class="fa-regular fa-pen-to-square" />
		<img
			src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
			alt="gravatar"
		/>
	</div>
	<slot />
	<div class="sidebar">
		<div>search</div>
		<Promotes {promotes} />
		<WhoFollowList {users} />
		<Footer />
	</div>
</div>

<style>
	.main-container {
		display: grid;
		grid-template-columns: 0.5fr 2fr 1fr;

		padding: 40px 40px;
		background-color: black;
		color: white;
	}

	.navbar {
		min-height: 100vh;

		display: grid;
		grid-template-columns: 1fr;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
	}
</style>
