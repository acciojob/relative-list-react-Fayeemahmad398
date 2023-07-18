import React from "react";

const App = () => {
  const arr = ["faheem", "suhail", "sajid", "faizan", "salman"];
  return (
    <div id="main">
      <ol id="relativeList" key={"relativeList"}>
        {arr.map((name, index) => {
          return (
            <li
              id={`relativeListItem${index}`}
              key={`relativeListItem${index}`}
            >
              {name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
