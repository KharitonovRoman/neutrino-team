import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Title from "../components/title";
import Users from "../components/users";
import Progress from "../components/progress";
import api from "../../api";
import Loader from "../utils/Loader";
import { getPlayers } from "../utils/faceit";

const TeamPage = () => {
	const params = useParams();
	const history = useHistory();
	const teamName = params.teamName || "neutrino";

	let players = [];
	let teamPlayers = [];
	if (teamName === "custom") {
		teamPlayers =
			JSON.parse(localStorage.getItem("customTeam")).map((nickname) => ({
				nickname,
				team: "custom"
			})) || [];
		if (!teamPlayers.length) {
			history.push("/team/custom/edit");
		}
	} else {
		players = api.users.fetchAll();
		teamPlayers = players.filter((player) => player.team === teamName);
	}

	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const handleMoveAvatar = (nickname) => {
		setUsers((prevState) =>
			prevState.map((user) =>
				user.nickname === nickname
					? { ...user, isMoved: !user.isMoved }
					: user
			)
		);
	};

	if (teamPlayers.length) {
		useEffect(async () => {
			setIsLoading(true);
			setUsers(await getPlayers(teamPlayers));
		}, [teamName]);

		useEffect(() => {
			if (users.length) {
				setIsLoading(false);
			}
		}, [users]);
	}

	return (
		<>
			<Title teamName={teamName} />
			{!isLoading ? (
				<>
					<Users users={users} />
					<Progress
						users={users}
						teamName={teamName}
						onMoveAvatar={handleMoveAvatar}
					/>
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default TeamPage;
