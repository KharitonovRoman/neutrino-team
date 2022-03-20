import React from "react";
import PropTypes from "prop-types";

const Progress = ({ users }) => {
	const levelLimitsElo = [800, 950, 1100, 1250, 1400, 1550, 1700, 1850, 2000];
	return (
		<div className="relative progress-gradient h-8 rounded-md mt-12 border border-gray-100 shadow-lg">
			{levelLimitsElo.map((elo) => (
				<div
					key={elo}
					className="absolute w-2 h-8 border-l text-xs border-gray-100"
					style={{ left: (elo - 800) / 12 + "%" }}
				>
					<p className="absolute text-gray-500 -top-5 text-sm font-bold font-['Thasadith']">
						{elo}
					</p>
				</div>
			))}
			{users.map((user) => (
				<div
					key={user.nickname}
					className="absolute w-10 h-10 -mt-1 shadow-xl"
					style={{ left: (user.elo - 800) / 12 + "%" }}
				>
					<img src={user.avatar} className="border-2 border-white" />
				</div>
			))}
		</div>
	);
};

Progress.propTypes = {
	users: PropTypes.array
};

export default Progress;
