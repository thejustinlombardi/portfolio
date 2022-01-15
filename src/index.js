import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome/Welcome";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Welcome />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
