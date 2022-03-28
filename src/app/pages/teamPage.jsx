import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/title";
import Users from "../components/users";
import Progress from "../components/progress";
import api from "../../api";
import { getPlayers } from "../utils/faceit";
import Loader from "../utils/Loader";

const TeamPage = () => {
	const params = useParams();
	const teamName = params.teamName || "neutrino";
	const players = api.users.fetchAll();
	const teamPlayers = players.filter((player) => player.team === teamName);
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

	useEffect(async () => {
		setIsLoading(true);
		setUsers(await getPlayers(teamPlayers));
	}, [teamName]);

	useEffect(() => {
		if (users.length) {
			setIsLoading(false);
		}
	}, [users]);

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
