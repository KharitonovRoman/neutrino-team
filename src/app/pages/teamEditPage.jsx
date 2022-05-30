import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/title";

const TeamEditPage = () => {
	const params = useParams();
	const teamName = params.teamName;
	const [data, setData] = useState({
		nickname: "",
		players: JSON.parse(localStorage.getItem("customTeam")) || []
	});

	const handleChange = ({ target }) => {
		setData((prevState) => ({ ...prevState, nickname: target.value }));
	};

	const handleAddPlayer = () => {
		console.log("add", data);
		if (data.nickname) {
			setData((prevState) => ({
				...prevState,
				players: [...prevState.players, data.nickname]
			}));
			console.log("add 2", data);
		}
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			<Title teamName={teamName} />

			<div className="container py-32 mx-auto text-center sm:px-4">
				<div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-md">
					<input
						className="w-full h-12 px-6 py-2 font-medium text-gray-600 focus:outline-none"
						placeholder="Faceit nickname"
						type="text"
						name="nickname"
						value={data.nickname}
						onChange={handleChange}
					/>
					<span className="relative top-0 right-0 block">
						<button
							className="inline-flex items-center w-32 h-12 pl-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent hover:bg-orange-600 focus:outline-none active:bg-orange-600"
							type="button"
							onClick={handleAddPlayer}
						>
							Add Player
						</button>
					</span>
				</div>
			</div>
		</>
	);
};

export default TeamEditPage;
