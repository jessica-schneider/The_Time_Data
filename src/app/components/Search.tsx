import { useEffect, useState } from "react";
import { Icon } from "./Icon";

interface IMockPerson {
  id: number;
  personName: string;
  img: string;
}

export function Search() {
  const [selectedPerson, setSelectedPerson] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<IMockPerson[]>([]);
  const [allPeople] = useState<IMockPerson[]>([
    {
      id: 1,
      personName: "Livvy",
      img: "string",
    },
    {
      id: 2,
      personName: "Ivan",
      img: "string",
    },
    {
      id: 3,
      personName: "Norton",
      img: "string",
    },
    {
      id: 4,
      personName: "Lexi",
      img: "string",
    },
  ]);

  const handleDropdownClick = (person: IMockPerson) => {
    setSearchInput(person.personName);
    setSelectedPerson(person.id);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    if (searchInput.trim() == "") {
      setSearchResults([]);
      return;
    }
    setSearchResults(
      allPeople.filter(
        (option) =>
          option.personName.toLowerCase().indexOf(searchInput.toLowerCase()) >
          -1
      )
    );
  }, [searchInput, allPeople]);

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
