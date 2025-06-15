import InsertTimeCard from "./InsertTimeCard";

function Insert() {
  return (
    <>
      <div className="grid grid-rows-3 gap-4 ml-4 mt-4">
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
