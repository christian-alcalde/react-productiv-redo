import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const updatedTodo = {
      ...newTodo,
      id: uuid() // attaching new id
    }
    setTodos(() => [updatedTodo, ...todos]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const updatedTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
    setTodos(updatedTodos);
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            {todos.length ? <EditableTodoList todos={todos} update={update} remove={remove} /> : <span className="text-muted">You have no todos.</span> }
          </div>
          <div className="col-md-6">
            {todos.length > 0 ?
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos}/>
            </section> : <></>}
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm initialFormData={{title: '', description: '', priority: 1}} handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;