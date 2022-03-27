import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import TeamPage from "./pages/teamPage";
import UserPage from "./pages/userPage";

function App() {
	return (
		<div className="container mx-auto">
			<Switch>
				<Route path="/" exact component={TeamPage} />
				<Route path="/team/:teamName" exact component={TeamPage} />
				<Route path="/users/:userId" exact component={UserPage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default App;
