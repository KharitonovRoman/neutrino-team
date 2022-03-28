import React from "react";
import PropTypes from "prop-types";

const Progress = ({ users, teamName, onMoveAvatar }) => {
	const eloLevelLimits = {
		neutrino: [
			650, 800, 950, 1100, 1250, 1400, 1550, 1700, 1850, 2000, 2150
		],
		navi: [2500, 3000, 3500, 4000, 4500, 5000, 5500]
	};

	const getLeftInPercent = (elo) => {
		const limits = eloLevelLimits[teamName];
		return (
			(elo - limits[0]) / ((limits[limits.length - 1] - limits[0]) / 100)
		);
	};

	return (
		<div
			className={`relative ${teamName}-progress-gradient h-8 rounded-md mt-12 border border-gray-100 shadow-lg`}
		>
			{eloLevelLimits[teamName].map((elo) => (
				<div
					key={elo}
					className="absolute h-8 border-l text-xs border-gray-100"
					style={{
						left: getLeftInPercent(elo) + "%"
					}}
				>
					<p className="absolute text-gray-500 -top-6 text-sm font-bold font-elo">
						{elo}
					</p>
				</div>
			))}

			{users.map((user) => (
				<div
					key={user.nickname}
					className="absolute w-12 h-12 -mt-2 bg-white rounded-full overflow-hidden shadow-xl cursor-pointer"
					style={{
						left: getLeftInPercent(user.elo) + "%",
						top: (user.isMoved ? -40 : 0) + "px"
					}}
					onClick={() => onMoveAvatar(user.nickname)}
				>
					<img
						src={user.avatar}
						className="border border-gray-200 shadow-xl rounded-full cursor-pointer"
					/>
				</div>
			))}
		</div>
	);
};

Progress.propTypes = {
	users: PropTypes.array,
	teamName: PropTypes.string,
	onMoveAvatar: PropTypes.func
};

export default Progress;
