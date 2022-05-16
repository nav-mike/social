export interface TwitterUserInterface {
	name: {
		first: string;
		last: string;
	};
	login: {
		username: string;
		uuid: string;
	};
	picture: {
		thumbnail: string;
	};
}
