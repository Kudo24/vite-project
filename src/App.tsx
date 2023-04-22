import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [appear, setAppear] = useState(false);

  const handleList = (item: string) => {
    console.log(item);
  };

  const [name, setname] = useState<string>("");
  const [addnames, setAddNames] = useState<string[]>([]);

  const getName = (e: React.FormEvent) => {
    e.preventDefault();

    setAddNames([...addnames, name]);
    setname("");
  };
  console.log(name);
  return (
    <>
      {appear ? (
        <List
          handleList={handleList}
          onclick={() => setAppear(false)}
          name={name}
          setname={setname}
          addnames={addnames}
          getName={getName}
        />
      ) : null}

      <Button name="hello" onclick={() => setAppear(true)} />
    </>
  );
}

export default App;
