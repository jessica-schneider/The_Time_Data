import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function InsertPerson() {
  const [name, setName] = useState("");
  const createPerson = useMutation(api.person.createPerson);

  const submitPerson = async () => {
    await createPerson({ text: name });
    setName("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="card-body">
      <h2 className="card-title">Create A Person</h2>
      <div className="bg-primary grid grid-cols-2">
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
          <input
            type="text"
            value={name}
            className="grow"
            placeholder="Name"
            onChange={handleNameChange}
          />
        </label>

        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={submitPerson}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
