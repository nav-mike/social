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
	import Topbar from '$lib/components/Topbar.svelte';

	export let users: TwitterUserInterface[] = [];
	export let promotes: {
		title: string;
		domain: string;
		tweetsCount?: string;
		promotedBy?: string;
	}[] = [];
</script>

<div class="main-container">
	<div class="navbar">
		<i class="fa-brands fa-twitter fa-2xl" />
		<i class="fa-solid fa-house fa-xl" />
		<i class="fa-solid fa-hashtag fa-xl" />
		<i class="fa-regular fa-bell fa-xl" />
		<i class="fa-regular fa-envelope fa-xl" />
		<i class="fa-regular fa-bookmark fa-xl" />
		<i class="fas fa-list fa-xl" />
		<i class="fas fa-user fa-xl" />
		<i class="fa-regular fa-circle-question fa-xl" />
		<i class="fa-regular fa-pen-to-square fa-2xl" />
		<img
			src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
			alt="gravatar"
		/>
	</div>
	<div class="header">
		<Topbar />
	</div>
	<div class="main">
		<div class="content">
			<slot />
		</div>
		<div class="sidebar">
			<Promotes {promotes} />
			<WhoFollowList {users} />
			<Footer />
		</div>
	</div>
</div>

<style>
	.main-container {
		padding: 0 40px;
		background-color: black;
		color: white;

		display: flex;
	}

	.navbar {
		display: flex;
		flex-direction: column;
		min-height: 90vh;
		max-height: 90vh;
		justify-content: space-between;
		position: fixed;
		padding-top: 40px;
	}

	.header {
		position: fixed;
		left: 90px;
		width: calc(100% - 177px);
		padding: 10px 0;
		background-color: black;
	}

	img {
		border-radius: 50%;
		width: 50px;
	}

	.main {
		margin: 40px;
		display: flex;
		width: 100%;
	}

	.content {
		flex-grow: 1;
		margin: 40px;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
</style>
