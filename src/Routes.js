// Routes.js

import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import NoPage from "./NoPage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/aboutme" component={About} />
			<Route path="/skills" component={Skills} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
            <Route path="*" component={NoPage} />
		</Switch>
	);
};

export default Routes;
