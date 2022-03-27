import React from "react";
import UserCard from "./userCard";
import PropTypes from "prop-types";

const Users = ({ users }) => {
	const usersSortedByElo = users.sort(
		(user1, user2) => user1.elo - user2.elo
	);

	return (
		<>
			<div className="flex mt-28">
				{usersSortedByElo.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired
};

export default Users;
