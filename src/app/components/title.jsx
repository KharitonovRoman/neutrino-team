import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Title = ({ teamName }) => {
	return (
		<div className="text-center mt-8 text-gray-500 tea">
			<Link to={"/team/neutrino"}>
				<span
					className={`ml-20 text-5xl font-normal font-nickname ${
						teamName === "neutrino" ? "neutrino-gradient" : ""
					}`}
				>
					NeutrinoTeam
				</span>
			</Link>{" "}
			inspired by{" "}
			<Link to={"/team/navi"}>
				<span
					className={`text-xl italic font-bold font-nickname pr-1 ${
						teamName === "navi" ? "neutrino-gradient" : ""
					}`}
				>
					NAVI{" "}
				</span>
			</Link>
		</div>
	);
};

Title.propTypes = {
	teamName: PropTypes.string
};

export default Title;
