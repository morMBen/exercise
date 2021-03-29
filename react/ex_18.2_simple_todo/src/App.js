import React, { useState } from "react";





const App = () => {
  const [data, setData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ])

  const onClick = (index) => {
    return setData(data.map((e, i) => {
      if (index === i) {
        return { name: e.name, completed: !e.completed };
      } else {
        return e;
      }
    }))
  }

  const setItems = () => {
    return data.map((item, index) => {
      return (
        <React.Fragment>
          <p style={{ textDecorationLine: item.completed ? "line-through" : "none" }}>{item.name}
            <i
              class={item.completed ? "fas fa-check" : "fas fa-times"}
              onClick={() => onClick(index)}></i>
          </p>

        </React.Fragment>
      )
    })
  }

  return (
    <div>{setItems()}</div>
  );

}

export default App;
