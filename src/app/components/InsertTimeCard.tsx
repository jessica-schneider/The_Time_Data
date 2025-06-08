import { useState } from "react";
import { Icon } from "./Icon.tsx";

function InsertTimeCard() {
  const INDEX_TO_MONTHS = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const YEARS = [2024, 2025];

  const defaultTimeCard = {
    month: "January",
    year: 2025,
    personId: 0,
    name: "name",
    numberOfVisits: 1,
    file: "",
  };

  const [timeCard, setTimeCard] = useState(defaultTimeCard);

  function subtractOneMonth(date: Date) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    return newDate;
  }
  const currentDate = new Date();
  const previousMonth = subtractOneMonth(currentDate);
  const lastMonth = previousMonth.getMonth();
  const yearOfLastMonth = previousMonth.getFullYear();

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeCard({ ...timeCard, month: e.target.value });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeCard({ ...timeCard, year: +e.target.value });
  };

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Insert A Timecard</h2>

        <div className="bg-primary grid grid-cols-2">
          <select
            defaultValue={lastMonth}
            className="select"
            onChange={handleMonthChange}
          >
            <option disabled={true}>Pick a month</option>
            {Object.values(INDEX_TO_MONTHS).map((monthName) => (
              <option key={monthName}>{monthName}</option>
            ))}
          </select>

          <select
            defaultValue={yearOfLastMonth}
            className="select"
            onChange={handleYearChange}
          >
            <option disabled={true}>Pick a year</option>
            {YEARS.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        <label className="input">
          <Icon icon="person" />
          <input type="text" className="grow" placeholder="Person ID" />
        </label>

        <label className="input">
          <Icon icon="pencil" />
          <input type="text" className="grow" placeholder="Name" />
        </label>

        <label className="input">
          <Icon icon="hashtag" />
          <input type="text" className="grow" placeholder="Number of Visits" />
        </label>

        <input type="file" className="file-input" />

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => console.log("submitting....")}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default InsertTimeCard;
