import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import TeamEditPage from "./pages/teamEditPage";
import TeamPage from "./pages/teamPage";
import UserPage from "./pages/userPage";

function App() {
	return (
		<div className="container mx-auto">
			<Switch>
				<Route path="/" exact component={TeamPage} />
				<Route
					path="/team/:teamName/edit"
					exact
					component={TeamEditPage}
				/>
				<Route path="/team/:teamName" exact component={TeamPage} />
				<Route path="/users/:nickname" exact component={UserPage} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default App;
