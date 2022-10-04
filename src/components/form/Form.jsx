import React from "react";
import { useState } from "react";
import "./style.css";

let number = 3;
function Form({ setTodos, todos }) {
  const initailState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  //stateName = todo, setTodo로 state값을 변경한다.
  const [todo, setTodo] = useState(initailState);
  const onChangeHandler = (e) => {
    //value값은 input의 입력값.
    const { name, value } = e.target; //구조할당부분인거같은데. name =  [title,body] 로 보임.
    //todo 부분의 (initialState부분) name/value값을 변경.(Title/body)
    setTodo({ ...todo, [name]: value });
  };

  //이게 TodoList로 올라가버리는구나?
  const onSubmitHandler = (e) => {
    e.preventDefault(); //이벤트전파 확인.
    if (todo.title.trim() === "" || todo.body.trim() === "") return; //입력값없으면 그냥리턴.
    //todos는 배열이기때문에 [...todos]
    setTodos([...todos, { ...todo, id: number }]); //onchange지정된 todo id변경. 앞은기존 뒤는추가.
    setTodo(initailState);
    number++;
  };
  // **** 흐름이 todolist에서 받아와서 -> form 에서 -> initialState를 List로 넘김???? ****
  return (
    //input 값이기 때문에 form태그와 라벨태그, onSubmit사용.
    //input의 value(body,title)가 state의 value ->
    <form onSubmit={onSubmitHandler} className="add-form">
      {/* label태그는 form요소에 이름을 붙이기 위한 tag*/}
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          //입력부분 title.
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          // input 내용의 입력부분
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      {/* 추가하기 버튼에서 어떠한 기능이 없는데 어떻게 list로 내려갈수있는거지? */}
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
