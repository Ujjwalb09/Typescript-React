//as we know what all props we want in person component we will define an interface. which will assign TYPE to props object.

import { useState } from "react";

interface personProps {
  name: string;
  age: number;
  isMarried: boolean | null;
}

// export const Person = (props: personProps) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>age: {props.age}</p>
//       <p>This person is {props.isMarried ? "Married" : "Single"}</p>
//     </div>
//   );
// };

//we give TYPE to properties/keys in object with the help of interface as we cannot write {name:string, age:number} inside an object. so we define an interface for it.

export const Person = ({ name, age, isMarried }: personProps) => {
  const [personBio, setPersonBio] = useState<string | null>(null);
  return (
    <div>
      <p>Name: {name}</p>
      <p>age: {age}</p>
      <p>This person is {isMarried ? "Married" : "Single"}</p>

      <p>
        {" "}
        {name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>

      <input />
    </div>
  );
};
