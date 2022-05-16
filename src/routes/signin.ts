import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post: (event: {
	request: Request;
}) => Promise<{ headers: Record<string, unknown> }> = async ({ request }) => {
	const data = await request.formData();
	const { email, password } = Object.fromEntries(data);

	return {
		headers: {
			'set-cookie': [cookie.serialize('sessionid', `${email}: ${password}`)]
		},
		status: 301,
		redirect: '/'
	};
};
