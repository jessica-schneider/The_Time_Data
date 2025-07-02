import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Dispatch, SetStateAction } from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { getPerson } from "../../../convex/person";

interface IPerson {
  _creationTime?: number;
  _id: Id<"person">;
  personName: string;
}

interface ITimeCard {
  month: string;
  year: number;
  personId: string;
  name: string;
  numberOfVisits: number;
  file: string;
}

interface ISearchResult {
  _creationTime?: number;
  _id: Id<"person"> | "0";
  personName: string;
}

interface PersonSearchProps {
  timeCard: ITimeCard;
  setTimeCard: Dispatch<SetStateAction<ITimeCard>>;
}

export function PersonSearch({ timeCard, setTimeCard }: PersonSearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const insertNewPerson = useMutation(api.person.createPerson);
  const getAllPeople = useQuery(api.person.getAllPeople);
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  useEffect(() => {
    if (!getAllPeople) return;

    if (searchInput.trim() == "") {
      setSearchResults([
        {
          _id: "0",
          personName: "Add new...",
        },
      ]);
      return;
    }
    const filteredSearchResults: ISearchResult[] = getAllPeople.filter(
      (option) =>
        option.personName.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
    filteredSearchResults.push({ _id: "0", personName: "Add new..." });
    setSearchResults(filteredSearchResults);
  }, [searchInput, getAllPeople]);

  const createPerson = async () => {
    const result = await insertNewPerson({ text: searchInput });
    setTimeCard({ ...timeCard, personId: result });
  };

  const handleDropdownClick = (person: ISearchResult) => {
    if (person._id === "0") {
      createPerson();
    }

    setTimeCard({
      ...timeCard,
      personId: person._id,
    });
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
            {searchResults.map((person: ISearchResult) => {
              return (
                <li onClick={() => handleDropdownClick(person)}>
                  {person.personName}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
