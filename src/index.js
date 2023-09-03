import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import 'font-awesome/css/font-awesome.min.css';




const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
