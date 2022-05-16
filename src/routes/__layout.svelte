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
		<div>Trends for you</div>
		<div>Who to follow</div>
		<footer>footer</footer>
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
		display: grid;
		grid-template-columns: 1fr;
	}
</style>
