import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import API from "../../api";

const UserPage = () => {
	const params = useParams();
	const userId = params.userId;
	const user = API.users.fetchUser(userId);

	const goBack = () => {
		history.back();
	};

	return (
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
							<li className="pl-3 pr-4 py-3 flex items-center">
								<div className="w-0 flex-1 flex items-center">
									<span className="text-base font-medium text-gray-500">
										Team
									</span>
								</div>
								<div className="flex-shrink-0">
									<span className="font-semibold text-3xl font-elo">
										{user.team}
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

UserPage.propTypes = {
	user: PropTypes.object
};

export default UserPage;
