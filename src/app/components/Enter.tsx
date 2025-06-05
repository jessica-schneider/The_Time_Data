import { useState } from "react";
import EnterTimeCard from "./EnterTimeCard";
import EnterPerson from "./EnterPerson";

function Enter() {
  return (
    <>
      <div className="grid grid-rows-2 gap-4 ml-4 mt-4">
        <div className="">
          <div className="card bg-base-300 w-96 shadow-sm ">
            <EnterPerson />
          </div>
        </div>
        <div className="">
          <div className="card bg-base-300 w-96 shadow-sm ">
            <EnterTimeCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Enter;
