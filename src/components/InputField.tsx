import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleApp: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleApp }: Props) => {
  return (
    <div>
      <form action="" onSubmit={handleApp}>
        <input
          type="text"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <p>{todo}</p>
    </div>
  );
};

export default InputField;
