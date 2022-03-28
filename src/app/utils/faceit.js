import axios from "axios";

axios.defaults.headers.common = {
	Authorization: "Bearer 9a57a5c4-a3f0-4156-9b84-d8a14ce1caf5"
};

export async function getPlayers(players) {
	return await Promise.all(
		players.map(async (player) => {
			let response = await axios.get(
				`https://open.faceit.com/data/v4/players?nickname=${player.nickname}`
			);
			const playerData = response.data;
			response = await axios.get(
				`https://open.faceit.com/data/v4/players/${playerData.player_id}/stats/csgo?limit=1`
			);
			const playerStats = response.data;
			return {
				nickname: playerData.nickname,
				avatar:
					playerData.avatar ||
					"https://assets.faceit-cdn.net/avatars/bf5030f0-bf42-4070-b8a7-ca63564b2dd3_1626635753723.jpg",
				elo: playerData.games.csgo.faceit_elo,
				level: playerData.games.csgo.skill_level,
				stats: playerStats.lifetime,
				recentResults: playerStats.lifetime["Recent Results"].map(
					(result) => result === "1"
				)
			};
		})
	);
}

export async function getPlayer(nickname) {
	let response = await axios.get(
		`https://open.faceit.com/data/v4/players?nickname=${nickname}`
	);
	const playerData = response.data;
	response = await axios.get(
		`https://open.faceit.com/data/v4/players/${playerData.player_id}/stats/csgo?limit=1`
	);
	const playerStats = response.data;
	const t = {
		nickname: playerData.nickname,
		avatar:
			playerData.avatar ||
			"https://assets.faceit-cdn.net/avatars/bf5030f0-bf42-4070-b8a7-ca63564b2dd3_1626635753723.jpg",
		elo: playerData.games.csgo.faceit_elo,
		level: playerData.games.csgo.skill_level,
		stats: Object.entries(playerStats.lifetime)
			.filter(([title]) => title !== "Recent Results")
			.sort((entry1, entry2) => entry1[0].localeCompare(entry2[0])),
		recentResults: playerStats.lifetime["Recent Results"].map(
			(result) => result === "1"
		)
	};
	console.log(t);
	return t;
}
