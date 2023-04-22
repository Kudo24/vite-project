import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [appear, setAppear] = useState(false);
  const handleList = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {appear ? (
        <List handleList={handleList} onclick={() => setAppear(false)} />
      ) : null}

      <Button name="hello" onclick={() => setAppear(true)} />
      <div>hello world</div>
    </>
  );
}

export default App;
