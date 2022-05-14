import * as cookie from 'cookie';

export type UserSession = {
	authenticated: boolean;
};

export const getSession: (props: {
	headers: Headers & { cookie: string };
}) => Promise<UserSession> = async ({ headers }) => {
	const cookies = cookie.parse(headers.cookie || '');

	try {
		if (cookies.sessionid) {
			// const { sessionid } = cookies;

			return {
				authenticated: false
			};
		}
	} catch (error) {
		console.log(error);
	}

	return {
		authenticated: false
	};
};
