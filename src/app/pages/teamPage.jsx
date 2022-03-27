import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/title";
import Users from "../components/users";
import Progress from "../components/progress";
import api from "../../api";

const TeamPage = () => {
	const params = useParams();
	const teamName = params.teamName || "neutrino";
	const [users, setUsers] = useState([]);
	const handleMoveAvatar = (userId) => {
		setUsers((prevState) =>
			prevState.map((user) =>
				user.id === userId ? { ...user, isMoved: !user.isMoved } : user
			)
		);
	};

	useEffect(() => {
		setUsers(api.users.fetchUsers(teamName));
	}, [teamName]);

	return (
		<>
			<Title teamName={teamName} />
			<Users users={users} />
			<Progress
				users={users}
				teamName={teamName}
				onMoveAvatar={handleMoveAvatar}
			/>
		</>
	);
};

export default TeamPage;
