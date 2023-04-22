import React from "react";
import { useEffect, useState } from "react";

interface Props {
  handleList: (item: string) => void;
  onclick: () => void;
}

function List({ handleList, onclick }: Props) {
  const list = ["alistaire", "andrei", "peter"];
  const [color, setcolor] = useState("");

  return (
    <div>
      <div>
        <form action="">
          <input type="text" name="" id="" />

          <button type="submit" onClick={() => console.log("submit")}>
            submit
          </button>
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
    </div>
  );
}

export default List;
