import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          submit
        </button>
      </form>
      <p>{todo}</p>
    </div>
  );
};

export default InputField;
