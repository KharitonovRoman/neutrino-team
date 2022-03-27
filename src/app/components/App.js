import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Users from "./users";
import UserPage from "./userPage";

function App() {
	return (
		<>
			<Switch>
				<Route path="/" exact component={Users} />
				<Route path="/users/:userId?" component={UserPage} />
				<Route path="/users" exact component={Users} />

				<Redirect to="/" />
			</Switch>
		</>
	);
}

export default App;
