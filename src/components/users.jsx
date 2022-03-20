import React from "react";
import api from "../api";
import UserCard from "./userCard";
import Progress from "./progress";

const Users = () => {
	const users = api.users.fetchAll();
	return (
		<div className="container mx-auto mt-48">
			<div className="flex">
				{users.map((user) => (
					<UserCard key={user.nickname} user={user} />
				))}
			</div>
			<Progress users={users} />
		</div>
	);
};

export default Users;
