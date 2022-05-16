<script lang="ts" context="module">
	import type { UserSession } from 'src/hooks';

	export const load: (props: { session: UserSession }) => {} = async ({ session }) => {
		if (session.authenticated) {
			return {
				status: 301,
				redirect: '/'
			};
		}

		return {
			props: {}
		};
	};
</script>

<div class="container">
	<h1>Sign In</h1>
	<form action="/signin" method="post">
		<div class="form-controls">
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" />
		</div>
		<div class="form-controls">
			<label for="password">Password:</label>
			<input type="password" name="password" id="password" />
		</div>
		<div class="form-controls">
			<button type="submit">Sign In</button>
			<a href="/sign-up">Sign Up</a>
		</div>
	</form>
</div>
