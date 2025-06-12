import InsertTimeCard from "./InsertTimeCard";
import InsertPerson from "./InsertPerson";
import { Search } from "./Search";

function Insert() {
  return (
    <>
      <div className="grid grid-rows-3 gap-4 ml-4 mt-4">
        <div className="grid">
          <Search />

          <div className="card bg-base-300 w-96 shadow-sm ">
            <InsertPerson />
          </div>
        </div>
        <div className="">
          <div className="card bg-base-300 w-96 shadow-sm ">
            <InsertTimeCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Insert;
