import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
	console.log(user);
	return (
		<div className="bg-white border border-gray-200 rounded-lg text-center shadow-xl w-full m-1">
			<img src={user.avatar} className="rounded-t-lg" />
			<div className="flex justify-center">
				<img
					src={`https://cdn-frontend.faceit.com/web/960/src/app/assets/images-compress/skill-icons/skill_level_${user.level}_svg.svg`}
					alt={`${user.level} level`}
					className="w-16 rounded-full object-center border-4 border-white -mt-6 shadow-lg align-center"
				/>
			</div>
			<p className="text-2xl font-bold pt-3 pb-2 font-['Quicksand']">
				{user.nickname}
			</p>
			<p className="font-semibold pt-2 pb-5 text-sm text-gray-500">
				Faceit elo
				<p className="text-3xl font-['Thasadith'] text-blue-500 hover:text-blue-700">
					{user.elo}
				</p>
			</p>
		</div>
	);
};

UserCard.propTypes = {
	user: PropTypes.object
};

export default UserCard;
