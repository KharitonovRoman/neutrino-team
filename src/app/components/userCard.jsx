import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
	return (
		<div className="bg-white border border-gray-200 rounded-lg text-center shadow-xl w-60 m-1">
			<Link to={`/users/${user.id}`}>
				<img src={user.avatar} className="rounded-t-lg" />
			</Link>

			<div className="flex justify-center">
				<a
					target="_blank"
					rel="noreferrer"
					href={`https://www.faceit.com/ru/players/${user.nickname}`}
				>
					<img
						src={`https://cdn-frontend.faceit.com/web/960/src/app/assets/images-compress/skill-icons/skill_level_${user.level}_svg.svg`}
						alt={`${user.level} level`}
						className="w-16 rounded-full border-4 bg-white border-white -mt-6 shadow-lg align-center"
					/>
				</a>
			</div>
			<p className="text-2xl font-bold pt-3 pb-2 font-nickname hover:text-blue-700">
				<Link to={`/users/${user.id}`}>{user.nickname}</Link>
			</p>
			<p className="font-semibold pt-2 pb-5 text-sm text-gray-500">
				Faceit elo
				<p className="text-3xl font-elo text-blue-500">{user.elo}</p>
			</p>
		</div>
	);
};

UserCard.propTypes = {
	user: PropTypes.object
};

export default UserCard;
