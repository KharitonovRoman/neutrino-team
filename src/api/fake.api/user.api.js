const users = [
	{
		id: "1",
		nickname: "Yarko",
		team: "neutrino",
		elo: 788,
		level: 1,
		avatar: "https://assets.faceit-cdn.net/avatars/0cd9f585-5b41-41e6-8411-3231a03de36f_1633908373592.jpg"
	},
	{
		id: "2",
		nickname: "-Romanova-",
		team: "neutrino",
		elo: 1146,
		level: 4,
		avatar: "https://distribution.faceit-cdn.net/images/932d5528-b77b-4f90-826b-d6b98db6616d.jpeg"
	},
	{
		id: "3",
		nickname: "lethiferous",
		team: "neutrino",
		elo: 1281,
		level: 5,
		avatar: "https://assets.faceit-cdn.net/avatars/4ae46f90-5684-476e-9cc4-9e6be2397fc8_1616079246016.jpg"
	},
	{
		id: "4",
		nickname: "machet1k",
		team: "neutrino",
		elo: 1334,
		level: 5,
		avatar: "https://assets.faceit-cdn.net/avatars/d6a18e31-8ca4-418d-97e3-da135e393d07_1554693943799.jpg"
	},
	{
		id: "5",
		nickname: "shaman95",
		team: "neutrino",
		elo: 1420,
		level: 6,
		avatar: "https://assets.faceit-cdn.net/avatars/4f15fbb4-b512-4f02-b427-21ddf42642a4_1615835939129.jpg"
	},
	{
		id: "6",
		nickname: "GrandMaster4",
		team: "neutrino",
		elo: 1571,
		level: 7,
		avatar: "https://assets.faceit-cdn.net/avatars/3a8f2252-39fa-4e06-afbf-5c0c1179ff2b_1589740986065.jpg"
	},
	{
		id: "7",
		nickname: "NewTony",
		team: "neutrino",
		elo: 1701,
		level: 8,
		avatar: "https://assets.faceit-cdn.net/avatars/2af7f455-8aa1-44b6-9540-5af505b7f49e_1584659276862.jpg"
	},
	{
		id: "8",
		nickname: "_Chi_",
		team: "neutrino",
		elo: 2144,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/c51b2c2b-e89a-4c35-ab85-106247c1f18f_1550946151558.jpg"
	},
	{
		id: "9",
		nickname: "s1mple",
		team: "navi",
		elo: 4352,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/ac71ba3c-d3d4-45e7-8be2-26aa3986867d_1581521810013.jpg"
	},
	{
		id: "10",
		nickname: "Perfecto-",
		team: "navi",
		elo: 4148,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/9a5ff08b-4b66-4797-998b-d78713979945_1550612097360.jpg"
	},
	{
		id: "11",
		nickname: "b1t",
		team: "navi",
		elo: 5041,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/a20678de-0c2d-4a9f-bf8e-3c856bceab45_1583016694830.jpg"
	},
	{
		id: "12",
		nickname: "Boombl4",
		team: "navi",
		elo: 4148,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/498f0855-a1ab-4be3-b21d-3fc5d70fc441_1612449137774.jpg"
	},
	{
		id: "13",
		nickname: "electronic",
		team: "navi",
		elo: 4313,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/bf5030f0-bf42-4070-b8a7-ca63564b2dd3_1626635753723.jpg"
	},
	{
		id: "14",
		nickname: "B1ad3",
		team: "navi",
		elo: 2685,
		level: 10,
		avatar: "https://assets.faceit-cdn.net/avatars/bf5030f0-bf42-4070-b8a7-ca63564b2dd3_1626635753723.jpg"
	},
	{
		id: "15",
		nickname: "m0NESY",
		team: "navi",
		elo: 5466,
		level: 10,
		avatar: "https://distribution.faceit-cdn.net/images/7e92d274-4c9a-4619-90e0-a9cc5e3e4fa9.jpeg"
	}
];

export function fetchUsers(team) {
	return users.filter((user) => user.team === team);
}

export function fetchUser(userId) {
	return users.filter((user) => user.id === userId)[0];
}
