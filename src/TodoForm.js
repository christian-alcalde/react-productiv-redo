import React, { useState } from "react";

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({initialFormData, handleSave}) {
  const [title, setTitle] = useState(initialFormData.title);
  const [description, setDescription] = useState(initialFormData.description);
  const [priority, setPriority] = useState(initialFormData.priority);

  /** Update form input. */
  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handlePriorityChange(evt) {
    setPriority(evt.target.value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    const todo = {
      id: initialFormData.id,
      title: title,
      description: description,
      priority: priority
    }
    handleSave(todo);

    setTitle('');
    setDescription('');
    setPriority(1);
  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
              id="newTodo-title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleTitleChange}
              value={title}
              aria-label="Title"
          />
        </div>

        <div className="mb-3">
          <textarea
              id="newTodo-description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleDescriptionChange}
              value={description}
              aria-label="Description"
          />
        </div>

        <div className="mb-3 d-flex justify-content-between">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="newTodo-priority"
                   className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
            <select id="newTodo-priority"
                    name="priority"
                    value={priority}
                    onChange={handlePriorityChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>Ultra-Über</option>
              <option value={2}>Über</option>
              <option value={3}>Meh</option>
            </select>
          </div>
          <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
            Gø!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;
