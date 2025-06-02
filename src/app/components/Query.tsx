import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";


    
function Query() {
	const time_clock_data = useQuery(api.time_clock_data.get);

	return (
		<>			
			<div className="card bg-base-300 w-96 shadow-sm">
        		<h1 className="title">Time Clock Data</h1>
				{time_clock_data?.map(({ name, datein, dateout }) => (
					<div key={name} className="card-body">
						<h3 className="card-title">{name}</h3>
						<div className="">
							<p><span className="">Date In:</span> {datein}</p>
							<p><span className="">Date Out:</span> {dateout}</p>
						</div>
					</div>
				))} 
			</div>

			
		</>)
	;
}

export default Query;