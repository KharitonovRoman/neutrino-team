import React from "react";
import { Link, useParams } from "react-router-dom";

const Title = () => {
	const params = useParams();
	const { teamName } = params;

	return (
		<>
			<div className="text-center mt-8 text-gray-500">
				<div>
					<Link to={"/team/neutrino"}>
						<span
							className={`ml-20 text-5xl font-normal font-nickname ${
								teamName === "neutrino"
									? "neutrino-gradient"
									: ""
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
				<div className="font-nickname">
					<Link to={"/team/custom"}>
						<span
							className={`font-bold ${
								teamName === "custom" ? "neutrino-gradient" : ""
							}`}
						>
							My custom team{" "}
						</span>
					</Link>
					<Link to={"/team/custom/edit"}>
						<span className="text-gray-400">[edit]</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Title;
