import { useState } from "react";

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

  //   const MONTHS_TO_INDEX = {
  //     January: 0,
  //     February: 1,
  //     March: 2,
  //     April: 3,
  //     May: 4,
  //     June: 5,
  //     July: 6,
  //     August: 7,
  //     September: 8,
  //     October: 9,
  //     November: 10,
  //     December: 11,
  //   };

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
    console.log(e.target.value);
    console.log(typeof e.target.value);
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
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
            </g>
          </svg>
          <input type="text" className="grow" placeholder="Person ID" />
        </label>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </g>
          </svg>
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M4 9h16"></path>
              <path d="M4 15h16"></path>
              <path d="M10 3l-2 18"></path>
              <path d="M16 3l-2 18"></path>
            </g>
          </svg>
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
