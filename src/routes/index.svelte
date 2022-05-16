<script lang="ts" context="module">
	import type { UserSession } from 'src/hooks';

	export const load: (props: { session: UserSession }) => {} = async ({ session }) => {
		if (!session.authenticated) {
			return {
				status: 301,
				redirect: '/signin'
			};
		}

		return {
			props: {
				loggedIn: session.authenticated
			}
		};
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
