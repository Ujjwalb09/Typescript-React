//as we know what all props we want in person component we will define an interface. which will assign TYPE to props object.

import { useState } from "react";

export enum Countries {
  India = "India",
  Britain = "Britain",
  UnitedStates = "UnitesStates",
}

interface personProps {
  name: string;
  age: number;
  isMarried: boolean | null;
  country: Countries;
}

//we give TYPE to properties/keys in object with the help of interface as we cannot write {name:string, age:number} inside an object. so we define an interface for it.

export const Person = ({ name, age, isMarried, country }: personProps) => {
  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>age: {age}</p>
      <p>This person is {isMarried ? "Married" : "Single"}</p>
      <p>This person is from: {country}</p>
      <p>
        {" "}
        {name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
      {/* In inline arrow function typescript will automatically infer the type of item as an React.ChangeEvent<HTMLInputElement> */}
      {/* <input onChange={(item) => setPersonBio(item.target.value)} /> */}

      <input onChange={handleChange} />
    </div>
  );
};
