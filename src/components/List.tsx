import React from "react";
import { useEffect, useState } from "react";

interface Props {
  handleList: (item: string) => void;
  onclick: () => void;
  name: string;
  setname: React.Dispatch<React.SetStateAction<string>>;
  addnames: string[];
  getName: (e: React.FormEvent) => void;
}

function List({ handleList, onclick, addnames, setname, getName }: Props) {
  const list = ["alistaire", "andrei", "peter"];
  const [color, setcolor] = useState("");

  return (
    <div>
      <div>
        <form action="" onSubmit={getName}>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setname(e.target.value)}
          />

          <button type="submit">submit</button>
        </form>
        <ul className="list-group">
          {list.map((list, index) => (
            <li
              onClick={() => handleList(list)}
              key={list}
              className="list-group-item active"
            >
              {list}
            </li>
          ))}
        </ul>
        <button onClick={onclick}>close</button>
      </div>
      <p>
        {addnames.map((adname) => (
          <li>{adname}</li>
        ))}
      </p>
    </div>
  );
}

export default List;
