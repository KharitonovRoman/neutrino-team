import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getPlayer } from "../utils/faceit";
import Loader from "../utils/Loader";

const UserPage = () => {
	const params = useParams();
	const nickname = params.nickname;
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(async () => {
		setIsLoading(true);
		setUser(await getPlayer(nickname));
	}, [params]);

	useEffect(() => {
		if (user.nickname) {
			setIsLoading(false);
		}
	}, [user]);

	const goBack = () => {
		history.back();
	};

	return !isLoading && Object.keys(user).length > 0 ? (
		<div className="shadow sm:rounded-lg mt-8 bg-white text-2xl">
			<div className="flex justify-center items-center">
				<span className="hidden sm:block">
					<button
						type="button"
						className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100"
						onClick={() => {
							goBack();
						}}
					>
						Back
					</button>
				</span>
				<div className="px-4 py-5 sm:px-6 font-bold text-4xl leading-6 text-gray-900 font-['Quicksand']">
					{user.nickname}
				</div>
			</div>

			<div className="flex justify-center">
				<div className="px-4 py-5 sm:grid border-t sm:grid-cols-3 sm:gap-4 sm:px-6">
					<img
						src={user.avatar}
						className="my-2 rounded-md border border-gray-200"
					/>
					<div className="my-2 text-2xl text-gray-900 sm:col-span-2">
						<ul
							role="list"
							className="border border-gray-200 rounded-md divide-y divide-gray-200"
						>
							<li className="pl-3 pr-4 py-3 flex items-center">
								<div className="w-0 flex-1 flex items-center">
									<span className="text-base font-medium text-gray-500">
										Steam
									</span>
								</div>
								<div className="flex-shrink-0">
									<span className="font-semibold text-3xl font-elo">
										<a
											href={`https://steamcommunity.com/profiles/${user.steam}`}
											target={"_blank"}
											rel="noreferrer"
										>
											<img
												src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg"
												className="h-10"
											/>
										</a>
									</span>
								</div>
							</li>
							<li className="pl-3 pr-4 py-3 flex items-center">
								<div className="w-0 flex-1 flex items-center">
									<span className="text-base font-medium text-gray-500">
										Facit Level
									</span>
								</div>
								<div className="flex-shrink-0">
									<img
										src={`https://cdn-frontend.faceit.com/web/960/src/app/assets/images-compress/skill-icons/skill_level_${user.level}_svg.svg`}
										alt={`${user.level} level`}
										className="w-12 m-2 rounded-full"
									/>
								</div>
							</li>
							<li className="pl-3 pr-4 py-3 flex items-center">
								<div className="w-0 flex-1 flex items-center">
									<span className="text-base font-medium text-gray-500">
										Facit Elo
									</span>
								</div>
								<div className="flex-shrink-0">
									<span className="font-semibold text-3xl font-elo text-blue-500">
										{user.elo}
									</span>
								</div>
							</li>

							{user.stats.map(([title, value], index) => (
								<li
									key={index}
									className="pl-3 pr-4 py-3 flex items-center"
								>
									<div className="w-0 flex-1 flex items-center">
										<span className="text-base font-medium text-gray-500">
											{title}
										</span>
									</div>
									<div className="flex-shrink-0">
										<span className="font-semibold text-xl font-elo">
											{value}
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loader />
	);
};

UserPage.propTypes = {
	user: PropTypes.object
};

export default UserPage;
