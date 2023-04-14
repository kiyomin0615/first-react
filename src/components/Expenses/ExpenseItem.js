import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// 프롭(매개변수)을 통해 데이터 전달받기
function ExpenseItem(props) {
  // title is a getter
  // setTitle is a setter
  const [title, setTitle] = useState(props.title); // 상태 초기화

  function clickHandler() {
    setTitle("상태 변경!");
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount} 원</div>
        </div>
        <button onClick={clickHandler}>수정</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
