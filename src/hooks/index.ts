import * as cookie from 'cookie';

export type UserSession = {
	authenticated: boolean;
};

export const getSession: (props: { headers: Request }) => Promise<UserSession> = async ({
	request
}) => {
	const { headers } = request;
	const cookies = cookie.parse(headers.get('cookie') || '');

	try {
		// console.log(cookies);
		if (cookies.sessionid) {
			// const { sessionid } = cookies;

			return {
				authenticated: true
			};
		}
	} catch (error) {
		console.log(error);
	}

	return {
		authenticated: false
	};
};
