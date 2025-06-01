import './App.css'
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
	const time_clock_data = useQuery(api.time_clock_data.get);


	return (
		<>    
			<h1 className="title">Time Clock Data</h1>
			<div className="time-clock-container">
				{time_clock_data?.map(({ name, datein, dateout }) => (
					<div key={name} className="time-clock-card">
						<h3 className="employee-name">{name}</h3>
						<div className="time-details">
							<p><span className="label">Date In:</span> {datein}</p>
							<p><span className="label">Date Out:</span> {dateout}</p>
						</div>
					</div>
				))} 
			</div>
		</>
	);
  
}

export default App
