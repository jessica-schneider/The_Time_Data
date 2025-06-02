import './App.css'
import Home from './app/components/Home.tsx'
import Query from './app/components/Query.tsx'
import Enter from './app/components/Enter.tsx'
import { Routes, Route } from "react-router";

 
function App() {

	return (
		<>    
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="query" element={<Query />} />
				<Route path="enter" element={<Enter />} />
				
			</Routes>
			
		</>
	);
  
}

export default App
