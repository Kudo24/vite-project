import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import List from "./components/List";
import Button from "./components/Button";
import InputField from "./components/InputField";
import { Todo } from "./model";

function App() {
  const [appear, setAppear] = useState(false);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // dito papaasok lahat ng todo na naka array

  const handleAdd = () => {
    console.log("click");
  };

  const handleList = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {appear ? (
        <List handleList={handleList} onclick={() => setAppear(false)} />
      ) : null}

      <Button name="hello" onclick={() => setAppear(true)} />
      <InputField todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
