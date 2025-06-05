import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './app/components/Navigation.tsx'


const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ConvexProvider client={convex}>
			<BrowserRouter>
				<Navigation />
				<App />
			</BrowserRouter>
		</ConvexProvider>
	</React.StrictMode>,
);