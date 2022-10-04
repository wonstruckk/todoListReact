import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

//props drilling
function List({ todos, setTodos }) {
  //console.log()활용한다.
  //todoId는 그냥 이름일 뿐??이아니라 인자잖아.
  const onDeleteHandler = (todoId) => {
    //todo는 todos의 단수로 그냥 이름만 적은거임.
    const newTodos = todos.filter((todo) => {
      //todo.id = todos.id.
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };
  //이부분은 내일다시설명 들어야 할 것 같다.
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">working..</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
