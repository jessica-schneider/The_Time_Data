import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { BrowserRouter, Link } from "react-router-dom";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ConvexProvider client={convex}>
			<BrowserRouter>
				<Link to="">Home</Link>
				<Link to="query">Query</Link>
				<App />
			</BrowserRouter>
		</ConvexProvider>
	</React.StrictMode>,
);