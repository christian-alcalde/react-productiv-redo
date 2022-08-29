import React, { useState } from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  let top = todos.reduce((acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return (
    <div>
      <Todo id={top.id} title={top.title} description={top.description} priority={top.priority}/>
    </div>
  );
}

export default TopTodo;