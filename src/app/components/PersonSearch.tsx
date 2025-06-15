import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface IMockPerson {
  id: number;
  personName: string;
}

export function PersonSearch() {
  const [selectedPerson, setSelectedPerson] = useState(0);

  const [searchInput, setSearchInput] = useState("");
  const insertNewPerson = useMutation(api.person.createPerson);

  const [searchResults, setSearchResults] = useState<IMockPerson[]>([]);

  const [allPeople] = useState<IMockPerson[]>([
    {
      id: 1,
      personName: "Livvy",
    },
    {
      id: 2,
      personName: "Ivan",
    },
    {
      id: 3,
      personName: "Norton",
    },
    {
      id: 4,
      personName: "Lexi",
    },
  ]);

  useEffect(() => {
    if (searchInput.trim() == "") {
      setSearchResults([
        {
          id: 0,
          personName: "Add new...",
        },
      ]);
      return;
    }
    const filteredSearchResults = allPeople.filter(
      (option) =>
        option.personName.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
    filteredSearchResults.push({ id: 0, personName: "Add new..." });
    setSearchResults(filteredSearchResults);
  }, [searchInput, allPeople]);

  const createPerson = async () => {
    await insertNewPerson({ text: searchInput });
    setSearchInput("");
  };

  const handleDropdownClick = (person: IMockPerson) => {
    if (person.id === 0) {
      createPerson();
    }
    setSearchInput(person.personName);
    setSelectedPerson(person.id);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };
  return (
    <>
      <div className={`${searchResults.length > 0 ? "dropdown" : ""}`}>
        <label className="input">
          <Icon icon="person" />
          <input
            type="text"
            value={searchInput}
            className="grow"
            placeholder="Name"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </label>
        {searchResults.length > 0 && (
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {searchResults.map((person: IMockPerson) => {
              return (
                <li onClick={() => handleDropdownClick(person)}>
                  {`${person.id}  ${person.personName}`}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
